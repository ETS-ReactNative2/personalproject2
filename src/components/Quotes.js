import React, { Component } from "react"
// import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../ducks/reducer'

class Quotes extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            phoneNumber: '',
            address: '',
            city: '',
            zip: '',
            windowCount: '',
            windowsHigh: '',
            total: ''
        }
        this.quoteValidation = this.quoteValidation.bind(this)
        this.handleQuoteSubmit = this.handleQuoteSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('/api/user-data').then((res) => {
           
            this.props.updateUser(res.data)
        })}

    handleWindowsInput(value) {

        console.log(value)
        if (value < 0) {
            return
        }
        else if (value === null) {
            return
        }

        else {
            this.setState({ windowCount: value }, this.calculateTotal)
        }

    }
    handleHighWindowInput(value) {
        if (value < 0) {
            return 
        }
        else if (value === null)
            return
        else {
            this.setState({ windowsHigh: value }, this.calculateTotal)
        }
    }

    quoteValidation() {
        const { fullName, address, city, zip, phoneNumber, windowCount, windowsHigh } = this.state
        if (fullName && address && city && zip && phoneNumber &&windowCount && windowsHigh) {
            this.handleQuoteSubmit()
        }
        else { alert("Please complete the form") }
    }

    handleQuoteSubmit() {
        const { fullName, address, city, zip, phoneNumber, windowCount, windowsHigh, total } = this.state
        axios.post('/api/quote', { fullName, address, city, zip, phoneNumber, windowCount, windowsHigh, total }).then(() => {
            console.log("in the then")
            this.props.history.push("/ThankYou")
        })

    }

    calculateTotal() {
        const {windowsHigh, windowCount } = this.state;
        let windowPrice = 5
        let windowHPrice = 10
        let total = windowCount * windowPrice + windowsHigh * windowHPrice;
        this.setState({total: total})
    }

    login() {
        let {
            REACT_APP_DOMAIN,
            REACT_APP_CLIENT_ID
        } = process.env;
        let uri = `${encodeURIComponent(window.location.origin)}/auth/callback/2`

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    }





    render() {
        // console.log(this.props)
        return (
            <div className='quotes-container'>
                <div className='none'>
                    <h1 className='quotesTitle'>Fast And Easy Quote!</h1>

                    {this.props.user.customerID? 
                        <div className='quotesInput'>
                        <div className='eachInput'>
                    * Full Name: <input onChange={(e) => this.setState({ fullName: e.target.value })} placeholder="Full Name" ></input>
                    </div>
                    <div className='eachInput'>
                    * Address:  <input onChange={(e) => this.setState({ address: e.target.value })} placeholder='Address' ></input>
                    </div>
                    <div className='eachInput'>
                    * City: <input onChange={(e) => this.setState({ city: e.target.value })} placeholder='City' ></input>
                    </div>
                    <div className='eachInput'>
                    * Zip code:  <input onChange={(e) => this.setState({ zip: e.target.value })} placeholder='Zip code' ></input>
                    </div>
                    <div className='eachInput'>
                    * Phone Number:  <input onChange={(e) => this.setState({ phoneNumber: e.target.value })} placeholder="Phone Number" ></input>
                    </div>
                    <div className='eachInput'>
                    * Window Count:  <input type='number' value={this.state.windowCount} onChange={(e) => this.handleWindowsInput(e.target.value)} placeholder='# of Windows' ></input>
                    </div>
                    <div className='eachInput'>
                    Windows over 20 feet high <input value={this.state.windowsHigh} onChange={(e) => this.handleHighWindowInput(e.target.value)} placeholder='High Windows' ></input>
                    </div>
                    <h2 className=''>Total</h2>
                    <div className='quotesTotal'>${this.state.total}.00</div>
                    <div><button className="getQuoteBtn" onClick={this.quoteValidation}>Schedule Now</button></div>
                    </div>
                    :
                    <div className='quotesInput1'>
                    <div className='eachInput'>
                    * Window Count:  <input type='number' value={this.state.windowCount} onChange={(e) => this.handleWindowsInput(e.target.value)} placeholder='# of Windows' ></input>
                    </div>
                    <div className='eachInput'>
                    Windows over 20 feet high <input value={this.state.windowsHigh} onChange={(e) => this.handleHighWindowInput(e.target.value)} placeholder='High Windows'></input>
                    </div>
                    <div className=''>Total</div>
                    <div className='quotesTotal'>${this.state.total}.00</div>
                    <div>
                    <div>Please login to request a appointment---> <button className="nav" onClick={this.login}>Login</button></div>
                    </div>



                    
                    </div>
                    }

                  
                    
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
export default connect(mapStateToProps, { updateUser })(Quotes)