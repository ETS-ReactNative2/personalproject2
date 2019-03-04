import React, { Component } from 'react'
import '../App.css'


import { connect } from 'react-redux';
import {updateUser} from '../ducks/reducer'
import axios from 'axios'


class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.toggle = this.toggle.bind(this)
        this.logout = this.logout.bind(this)
    }
    login() {
        let {
            REACT_APP_DOMAIN,
            REACT_APP_CLIENT_ID
        } = process.env;
        let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    }

    logout(){
        axios.get('/auth/logout').then(()=>{
            this.props.updateUser({})
        })
    }

    toggle() {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <div className='sides'>
                <div className='cart-login-container'>
                    {/* <div className="nav">CART</div> */}
                    {this.props.user.customerID ? 
                        
                        <div onClick={this.logout} className="nav">Logout </div>
                        
                        :
                         <div onClick={this.login} className="nav">Login</div>}
                        
                      

                    </div>
                <header className='header'>
                <img id='cleaning-man-logo' src={require('../images/jhdsf.png')}/>
                <img id='cleaning-man-logo2' src={require('../images/jhdsf.png')}/>
                    
                    <h1 className='businessName'>Cam's Window Cleaning</h1>
                    
                </header>
                
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {updateUser})(Nav)