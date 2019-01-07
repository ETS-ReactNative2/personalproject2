import React, { Component } from 'react'
import '../App.css'


import { connect } from 'react-redux';
import {updateUser} from '../ducks/reducer'
import axios from 'axios'
import sad from '.././Sad-face.jpg'

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
                    <img className="img2" onClick={this.toggle} alt="Toggle for menu" src={sad} />
                    <ul className={this.state.show ? 'basic show' : 'basic'}>
                    <div className="Joke">
                    THIS IS MY ANNOUNCMENT THAT I WILL BE JOINING COHORT 43! 
                    
                    </div>
                    <img className="jokePic" alt='' src={require('../Isuck.jpeg')} ></img>
                    </ul>
                    <div className="navBucket">
                        {/* <Link to="/"><button className="nav">HOME</button></Link>
                        <Link to="/about"><button className="nav">ABOUT</button></Link>
                        <Link to="/contact"><button className="nav">CONTACT </button></Link> */}

                    </div>
                    <h1 className='businessName'>Cam's Window Cleaning</h1>
                    <div>
                    <button className="nav"><span>CART</span></button>
                    {this.props.user.customerID ? 
                        
                        <button onClick={this.logout} className="nav"><span>Logout</span> </button>
                        
                        :
                         <button onClick={this.login} className="nav"><span>Login</span></button>}
                        
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