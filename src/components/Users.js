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
        <div className='users-table'>
            <div className='titles1'>
                            <div className="lName">CUSTOMER ID</div>
                            <div className="ffName">CUSTOMER NAME</div>
                            <div className="addApp">CUSTOMER EMAIL</div>
                            <div className="cityApp">ADMIN?</div>
                            </div>
            {this.state.users.map((user)=>{
                return(
                    // <div className='appointments'>
                    <div className='titles'>
                          <div className="lName">{`${user.customer_id}`}</div>
                            <div className="ffName">{`${user.customer_name}`}</div>
                            <div className="addApp">{`${user.customer_email}`}</div>
                            <div className="cityApp">{`${user.admin}`}</div>
                           
                    </div>
                    // </div>
                )
            })}
            <Link to ="/admin/appointment"><button>Appointments</button></Link>
        </div>
    )
}
}