import React, {Component} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Appointment extends Component{
    constructor(){
        super();
        this.state={
            appointments: []

        }
    }
        componentDidMount(){
            axios.get('/api/appointments').then(res=>{
                this.setState({appointments: res.data})
            })
        }

    render(){

        console.log(this.state)
        return(
            <div className="appointments" >
                <div className='appointment-titles'>
                            <div className="long">Name</div>
                            <div className="long">Address</div>
                            <div className="long">City</div>
                            <div className="short">Zip</div>
                            <div className="long">Phone Number</div>
                            <div className="short">Windows</div>
                            <div className="long">High Windows</div>
                            <div className="short">Amount</div>
                            <div className='border'/>
                 
                 </div>

                 
                
                {this.state.appointments.map((appointment)=>{
                    return(
                           

                        <div key={appointment.customer_id}>
                       
                        <div className="appointmentsBox">
                        

                            <div className="long">{`${appointment.full_name}`}</div>
                            <div className="long">{`${appointment.address}`}</div>
                            <div className="long">{`${appointment.city}`}</div>
                            <div className="short">{` ${appointment.zip}`}</div>
                            <div className="long">{`${appointment.phone}`}</div>
                            <div className="short">{`${appointment.windowcount}`}</div>
                            <div className="long">{`${appointment.highwindows}`}</div>
                            <div className="short">{` $${appointment.amount}`}</div>



                        
                        </div>
                        
                        </div>
                        
                    )
                })}
                <Link to = "/admin/users"> <button>Users</button></Link>
            </div>
        )
    }

}

