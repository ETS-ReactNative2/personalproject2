import React, { Component } from "react"
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../ducks/reducer'

// import Comments from './../components/Comments'
// import Add from './Add'


class Home extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            updateInput: '',
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

    }

    componentDidMount() {
        axios.get('/api/user-data').then((res) => {
            console.log(res.data)
            this.props.updateUser(res.data)
        })

        axios.get('/api/comment-data')

            .then(res => {
                this.setState({ comments: res.data })
            })
    }



    // login() {
    //     let {
    //         REACT_APP_DOMAIN,
    //         REACT_APP_CLIENT_ID
    //     } = process.env;
    //     let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`

    //     window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    // }

    handleInput(e) {
        this.setState({ userInput: e.target.value })
    }
    handleUpdate(id) {
        console.log('handling the edit')
        axios.put(`/comment/${id}`, { comment: this.state.updateInput }).then(res => {
            this.setState({ comments: res.data })
        })

    }
    handleClick(e) {
        axios.post('/api/comment', { comment: this.state.userInput }).then(res => {
            this.setState({ comments: res.data, userInput: '' })
        })
    }


    reset() {
        this.setState({ userInput: '' })
    }


    handleDelete(index) {
        axios.delete(`/comment/${index}`).then(res => {
            this.setState({ comments: res.data })
        })



    }

    handleAddComment() { }

    render() {
        console.log(this.props)
        return (
            <div>
                <header>

                    <div>
                        {/* <button className="nav">HOME</button>
                        <button className="nav">ABOUT</button>
                        <button className="nav">CONTACT US</button>
                    </div>
                    <h1>Cam's Window Cleaning</h1>
                    <div>
                        <button className="cart">CART</button> */}
                        {/* <button onClick={this.login} className="login">Admin Login</button> */}

                    </div>
                </header>
                <div className="body">
                    <div>
                        <br></br>
                    </div>
                    <div className='titleBoxes'>
                        <h1 className='comment1'>Why Choose Us?</h1>
                    </div>
                    <div className="homeInfo">

                    </div>
                    <div>
                        <Link to="/quotes"><button className="nav">Get A Quote!</button></Link>
                    </div>
                    <div className='titleBoxes'>
                        <h1 className='comment1'>Comments</h1>
                    </div>
                    <div className="comments">

                        <div>
                            
                            <form className="input" />
                            <h3>
                                Comments
                                </h3>

                            {this.props.user.customerID ? (<div>
                                
                                <input placeholder="type here" value={this.state.userInput} onChange={this.handleInput} />
                                <button onClick={this.handleClick}>Add</button>
                                </div>)
                                : null
                            }


                            {this.state.comments.map((comment, comment_id) => {
                                return (

                                    < div className='theComment' key={comment_id}>
                                        * {comment.comment}
                                    </div>
                                )
                            })}

                          

                        </div>
                       
                    </div>
                    <div>
                                {this.props.user.admin ? (<div>
                                   <Link to = "/admin/users"> <button>Users</button></Link>
                                    <Link to ="/admin/appointment"><button>Appointment</button></Link>
                                </div>)
                            : null    
                            }
                            </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { updateUser })(Home)