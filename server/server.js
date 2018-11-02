require('dotenv').config();
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const axios = require('axios')
const massive = require('massive')


const app = express()

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.json())

app.use( express.static( `${__dirname}/../build` ) );

const {
    SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
    AUTH_PROTOCAL
} = process.env;

let authByPass = async (req, res, next) => {
    if (process.env.NODE_ENV) {
        const db = req.app.get('db')
        let user = await db.session_user(1);
        req.session.user = user[0]
        // console.log(req.session.user)


    }
    next();

}
// app.use(authByPass)
// endpoints

app.get('/auth/callback', async (req, res) => {

    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${AUTH_PROTOCAL}://${req.headers.host}/auth/callback`
    }
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)

    console.log(userRes.data)
    let { email, picture, sub, name, admin } = userRes.data
    //check if that user already exists in our db 
    const db = app.get('db');
    let foundCustomer = await db.find_customer([sub]);
    //sub is the path that shows unique google id for the customer
    if (foundCustomer[0]) {
        //found user existing int he db, put returned user on session
        req.session.user = foundCustomer[0]

    } else {
        //no user was found by that google id. create new user in db. 
        let createCust = await db.create_customer([name, sub, picture, email, admin])
        req.session.user = createCust[0];

    }

    res.redirect('/#/')

})

app.get('/auth/callback/2', async (req, res) => {

    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${AUTH_PROTOCAL}://${req.headers.host}/auth/callback`
    }
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)

    console.log(userRes.data)
    let { email, picture, sub, name, admin } = userRes.data
    //check if that user already exists in our db 
    const db = app.get('db');
    let foundCustomer = await db.find_customer([sub]);
    //sub is the path that shows unique google id for the customer
    if (foundCustomer[0]) {
        //found user existing int he db, put returned user on session
        req.session.user = foundCustomer[0]

    } else {
        //no user was found by that google id. create new user in db. 
        let createCust = await db.create_customer([name, sub, picture, email, admin])
        req.session.user = createCust[0];

    }

    res.redirect('/#/quotes')

})




app.get('/api/user-data', (req, res) => {
    if (req.session.user) {
        var name = req.session.user.customer_name
        var picture = req.session.user.customer_picture
        var customerID = req.session.user.customer_id
        var admin = req.session.user.admin
        res.status(200).send({ name, picture, customerID, admin})
      

    } else {
        res.status(401).send('Do it right next time')
    }
})

app.get('/auth/logout', (req, res) => {
    console.log("before", req.session)
    req.session.destroy();
    console.log(req.session)
    res.redirect(process.env.REACT_URL)
})

// axios.get('/comment', (req, res)=>{
//     res.status(200).send(comments)
// })

app.get('/api/appointments', async (req, res)=>{
    const db = req.app.get('db')
    let appointments = await db.appointments_table()
    res.status(200).send(appointments)
})


app.post('/api/comment', async (req, res) => {
    const { customer_id } = req.session.user
    const { comment } = req.body
    const db = req.app.get('db')
    let comments = await db.create_comment([comment, customer_id])
    res.status(200).send(comments)
})

app.get('/api/comment-data', async (req, res) => {
    const db = req.app.get('db')
    let comments = await db.read_comments()
    res.status(200).send(comments)
})

app.delete('/api/comment/:id', async (req,res)=>{
    console.log(req.params)
    const db = req.app.get('db')
    const {id}= req.params
    let comments = await db.delete_comment([id])
    res.status(200).send(comments)
})

app.put('/api/comment/:id', async (req,res)=>{
    const db= req.app.get('db')
    const {id} = req.params
    const {comment} = req.body
    let comments = await db.edit_comment([comment, id])
    res.status(200).send(comments)
})


app.post('/api/quote', async (req, res) => {
    console.log(req.body)
    const { firstName, lastName, address, city, zip, windowCount, windowsHigh, total } = req.body
    const {customer_id}=req.session.user
    const db = req.app.get('db')
    console.log(req.session.user)
    await db.create_user_quote([firstName, lastName, address, city, zip, windowCount, windowsHigh, total, customer_id])
    res.sendStatus(200)
})

app.post('/api/quoteAmount', async (req,res)=>{
    const {windowCount, windowsHigh, total} = req.body
    const db = req.app.get('db')
    await db.quotes_total([windowCount, windowsHigh, total])
    res.sendStatus(200)
})



// GET: /api/appointments
// Populate an array of days using a for loop or something like it.
// iterate and retreive appointments by time.
// Loop over each hour, add an appointment or a nulled assignment;

// 90
// let time = moment('9:00', 'h:mm').add('hour', i)



massive(CONNECTION_STRING).then(db => app.set('db', db))

app.listen(SERVER_PORT, () => (console.log(`server listening on port ${SERVER_PORT}`)))