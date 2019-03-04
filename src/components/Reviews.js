import React, {Component} from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../ducks/reducer'

class Reviews extends Component{
    constructor(){
        super();
        this.state={
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


    handleInput(e) {
        if(e.target.value===null)
        alert("You can't add nothing")
        else{
        this.setState({ userInput: e.target.value })}
    }
    handleUpdate(id) {
        
        axios.put(`/api/comment/${id}`, { comment: this.state.updateInput }).then(res => {
            this.setState({ comments: res.data, userInput: '' })
        })

    }
    handleClick(e) {
        axios.post('/api/comment', { comment: this.state.userInput }).then(res => {
            this.setState({ comments: res.data, userInput: '' })
        })
    }
    handleDelete(index){
        axios.delete(`/api/comment/${index}`).then(res=>{
            this.setState({comments: res.data})
        })
    }


    reset() {
        this.setState({ userInput: '' })
    }

    render(){
        console.log(this)
        return(
            <div>
                
                <div className="review-container">
                
                    
                    
                   

                

                    <div className='comment-title-container'>
                        <h1 className='comment1'>Customer Reviews</h1>
                    </div>
                    <div className="comments">

                        <div>
                            
                            <form className="input" />
                            <h4 className="comments2">
                                Please let me know how I have done!
                                </h4>
                               

                            


                            {this.state.comments.map((comment) => {
                                
                                return (
                                    <div className='comment-container'>
                                    < div className='theComment' key={comment.comment_id}>
                                Customer({comment.customer_id}):  {comment.comment}
                                        {this.props.user.admin ? <div>
                                            <button className="buttons" onClick= {()=>this.handleDelete(comment.comment_id)}>Delete</button>
                                            <button className="buttons" onClick= {()=>this.handleUpdate(comment.comment_id)}>Edit</button>
                                        </div>
                                        : null
                                        }
                                    </div>
                                    
                                    </div>
                                    
                                )
                            })}

                          

                        </div>
                        {this.props.user.customerID ? (<div className='inputContainer'>
                                
                                <input placeholder="Comment here" value={this.state.userInput} onChange={this.handleInput} />
                                <button onClick={this.handleClick}>Add</button>
                                </div>)
                                : null
                            }
                       
                    </div>
                    <div>
                        
                                {this.props.user.admin ? (<div>
                                    <input className='updateInput' type='text' onChange={(e)=>{
             this.setState({updateInput: e.target.value})
           }}/>Update Text
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
export default connect(mapStateToProps, { updateUser })(Reviews)