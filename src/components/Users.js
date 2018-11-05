import React, { Component } from "react"
import Axios from "axios";
import {Link} from 'react-router-dom'

export default class Users extends Component{
    constructor(){
    super();
    this.state={
        users: []
    }
}
componentDidMount(){
    Axios.get('/api/allUsers').then(res=>{
        this.setState({users: res.data})
    })
}

render(){
    return(
        <div>
            {this.state.users.map((user)=>{
                return(
                    <div>
                          <div className="fName">{`${user.customer_id}`}</div>
                            <div className="lName">{`${user.customer_name}`}</div>
                            <div className="addApp">{`${user.customer_email}`}</div>
                            <div className="cityApp">{`${user.admin}`}</div>
                           
                    </div>
                )
            })}
            <Link to ="/admin/appointment"><button>Appointments</button></Link>
        </div>
    )
}
}