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
                
                {this.state.appointments.map((appointment)=>{
                    return(
                        <div key={appointment.quote_id}>
                        <div className="appointmentsBox">
                        {/* <div className="fName">First Name</div>
                            <div className="lName">Last Name</div>
                            <div className="addApp">Address</div>
                            <div className="cityApp">City</div>
                            <div className="zipApp">Zip Code</div>
                            <div className="winApp">Normal Window Count</div>
                            <div className="hWinApp">High Window Count</div>
                            <div className="totalApp">Total</div> */}

                            <div className="fName">{`${appointment.full_name}`}</div>
                            <div className="lName">{}</div>
                            <div className="addApp">{`${appointment.address}`}</div>
                            <div className="cityApp">{`${appointment.city}`}</div>
                            <div className="zipApp">{` ${appointment.zip}`}</div>
                            <div className="winApp">{`${appointment.windowcount}`}</div>
                            <div className="hWinApp">{`${appointment.highwindows}`}</div>
                            <div className="totalApp">{` $${appointment.amount}`}</div>



                        
                        </div>
                        
                        </div>
                    )
                })}
                <Link to = "/admin/users"> <button>Users</button></Link>
            </div>
        )
    }

}

