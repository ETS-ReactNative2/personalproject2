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
        if (e.target.value === null)
            alert("You can't add nothing")
        else {
            this.setState({ userInput: e.target.value })
        }
    }
    handleUpdate(id) {

        axios.put(`/api/comment/${id}`, { comment: this.state.updateInput }).then(res => {
            this.setState({ comments: res.data, userInput: '' })
        })

    }
    handleClick() {
        axios.post('/api/comment', { comment: this.state.userInput }).then(res => {
            this.setState({ comments: res.data, userInput: '' })
        })
    }
    handleDelete(index) {
        axios.delete(`/api/comment/${index}`).then(res => {
            this.setState({ comments: res.data })
        })
    }


    reset() {
        this.setState({ userInput: '' })
    }



    handleAddComment() { }

    render() {

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


                    <div className="picContainer">
                        <div className="camsPic"></div>
                    </div>
                    <div className="homeInfo">
                        <div className='services'>Services</div>
                        <h5>Residential Window Cleaning</h5>
                        <div className='homeBody'>
                            <img id="cleaningHousePic" src={require('../cleaninghouse.jpg')} alt=""></img>



                            <div className="text">
                                If it is made of glass, we can clean it.  Many new homes are full of windows to allow the maximum amount of sun into your home.  We will provide a streak free, sparkling view for you to enjoy.  Our services include:
                                <div className='flex'>
                                    <br></br>
                                    <div>
                                        <div> • Interior/Exterior Window Cleaning</div>
                                        <div> • Window Casings</div>
                                        <div> • Screen Cleaning</div>
                                    </div>
                                    <div className='secondGroup'>
                                        <div>• Mirror Cleaning</div>
                                        <div>• Chandelier Cleaning</div>
                                        <div>• Ceiling Fan Cleaning</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5>Commercial Window Cleaning</h5>
                        <div className='homeBody'>

                            <img id="businessPic" src={require('../business.jpg')} alt=""></img>
                            <div className='text'>Make sure your busi​ness portrays the right message to potential customers. A clean first impression says a lot about your business.  We provide the same attention to detail as we do our residential customers.  We are not your typical commercial window cleaning company.  We scrub and detail each window by hand and leave no dirty residue behind.</div>
                        </div>
                    </div>
                    <div id='center'>
                        <div>
                            <Link to="/quotes"><button className="nav">Get A Quote!</button></Link>
                        </div>
                        <div className='titleBoxes'>
                            <h1 className='comment1'>Comments</h1>
                        </div>
                        <div className="comments">

                            <div>

                                <form className="input" />
                                <h4 className="comments2">
                                    Please let me know how I have done!
                                </h4>

                                {this.props.user.customerID ? (<div>

                                    <input placeholder="type here" className="commentInput" value={this.state.userInput} onChange={this.handleInput} />
                                    <button onClick={this.handleClick}>Add</button>
                                </div>)
                                    : null
                                }


                                {this.state.comments.map((comment) => {

                                    return (

                                        < div className='theComment' key={comment.comment_id}>
                                            Customer({comment.customer_id}): {comment.comment}
                                            {this.props.user.admin ? <div>
                                                <button className="buttons" onClick={() => this.handleDelete(comment.comment_id)}>Delete</button>
                                                <button className="buttons" onClick={() => this.handleUpdate(comment.comment_id)}>Edit</button>
                                            </div>
                                                : null
                                            }
                                        </div>
                                    )
                                })}

                            </div>

                        </div>


                        <div>

                            {this.props.user.admin ? (<div>
                                <input className='updateInput' type='text' onChange={(e) => {
                                    this.setState({ updateInput: e.target.value })
                                }} />Update Text
                                   <Link to="/admin/users"> <button>Users</button></Link>
                                <Link to="/admin/appointment"><button>Appointment</button></Link>
                            </div>)
                                : null
                            }
                        </div>
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

