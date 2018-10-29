import React, {Component} from "react"
// import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Quotes extends Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName: '',
            address: '',
            city: '',
            zip: '',
            windowCount: 0,
            windowsHigh: 0,
            windowPrice: 5,
            windowHPrice: 10,
            total: ''
        }
        this.quoteValidation=this.quoteValidation.bind(this)
        this.handleQuoteSubmit= this.handleQuoteSubmit.bind(this)
    }

    handleWindowsInput(value){

        console.log(value)
        if (value < 0){
            return(0)}
            else if(value === null){
                return(0)
            }
            
            else{
        this.setState({totalW: (value*this.state.windowPrice)})}
    
    }
    handleHighWindowInput(value){
        if (value < 0){
            return(0)}
            else if(value === null)
            return(0)
            else{
        this.setState({totalH: (value*this.state.windowHPrice)})}
    }

    quoteValidation(){
        const {firstName, lastName, address,city,zip,windowCount,windowsHigh} = this.state
        if(firstName && lastName && address && city && zip && windowCount && windowsHigh){
            this.handleQuoteSubmit()
        }
        else{alert("Please complete the form")}
    }

    handleQuoteSubmit(){
        const {firstName, lastName, address,city,zip,windowCount,windowsHigh} = this.state
        axios.post('/api/quote', {firstName, lastName, address,city,zip,windowCount,windowsHigh}).then(()=>{
            console.log("in the then")
            this.props.history.push("/calendar")
        })
        
    }

    

    render(){
        // console.log(this.props)
        return(
            <div>
                <div className='quotesInput'>
                <h1 className='quotesTitle'>Fast And Easy Quote!</h1>
            
                   * First Name: <input onChange={(e)=>this.setState({firstName: e.target.value})} placeholder="First Name" className='eachInput'></input>
                   * Last Name:  <input onChange={(e)=>this.setState({lastName: e.target.value})} placeholder="Last Name" className='eachInput'></input>
                   * Address:  <input onChange={(e)=>this.setState({address: e.target.value})} placeholder='Address' className='eachInput'></input>
                   * City: <input onChange={(e)=>this.setState({city: e.target.value})} placeholder='City' className='eachInput'></input>
                   * Zip code:  <input onChange={(e)=>this.setState({zip: e.target.value})} placeholder='Zip code' className='eachInput'></input>
                   * Window Count:  <input type='number' onChange={(e)=>this.setState({windowCount: e.target.value})} placeholder='# of Windows' className='eachInput'></input>
                    Windows over 20 feet high <input onChange={(e)=> this.setState({windowsHigh:e.target.value})} placeholder='High Windows' className='eachInput'></input>
                    <div className='quotesTotal'>${this.state.windowCount * this.state.windowPrice + this.state.windowsHigh * this.state.windowHPrice}.00</div>
                    <div className=''>Total</div>

                   <button className="getQuoteBtn" onClick={this.quoteValidation}>Schedule Now</button>
                </div>
            </div>
        )
    }
}