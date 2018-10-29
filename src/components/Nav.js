import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import hamburger from '.././hamburger_menu.svg'
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

                <header className='header'>
                    <img onClick={this.toggle} src={hamburger} />
                    <ul className={this.state.show ? 'basic show' : 'basic'}>
                        <Link to="/"><button className="nav">HOME</button></Link>
                        <Link to="/about"><button className="nav">ABOUT</button></Link>
                        <Link to="/contact"><button className="nav">CONTACT </button></Link>
                    </ul>
                    <div className="navBucket">
                        <Link to="/"><button className="nav">HOME</button></Link>
                        <Link to="/about"><button className="nav">ABOUT</button></Link>
                        <Link to="/contact"><button className="nav">CONTACT </button></Link>

                    </div>
                    <h1 className='businessName'>Cam's Window Cleaning</h1>
                    <div>
                        <button className="nav">CART</button>
                    {this.props.user.customerID ? 
            
                        <button onClick={this.logout} className="nav">Logout </button>
                        :
                         <button onClick={this.login} className="nav">Login</button>}
                        
                        {/* <button onClick={this.login} className="login">Admin Login</button> */}

                    </div>
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