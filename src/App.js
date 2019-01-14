import React, { Component } from 'react';
import './App.css';
import routes from "./routes"
import Nav from './components/Nav'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser } from './ducks/reducer'
// import { Elements, StripeProvider } from 'react-stripe-elements'
// import CheckoutForm from './components/CheckoutForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAdmin: false,
      isUser: false
    }
  }

  componentDidMount() {
    axios.get('/api/user-data').then((res) => {

        this.props.updateUser(res.data)
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Nav />
        <div className={this.props.user.admin ? 'tabs2' : 'tabs' }>
          <Link to="/"><button className="nav"><span>HOME</span></button></Link>
          <Link to="/about"><button className="nav"><span>ABOUT</span></button></Link>
          <Link to="/contact"><button className="nav"><span>CONTACT</span> </button></Link>
          

{this.props.user.admin ? (<div>
   
       <Link to="/admin/users"> <button className="nav">Users</button></Link>
    <Link to="/admin/appointment"><button className="nav">Appointment</button></Link>
</div>)
    : null
}
      
                        
        </div>


        <div className='backgroundImg'>
         
           

          {routes}
        </div>
        <div className='bottomBorder'></div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      user: state.user
  }
}
export default connect(mapStateToProps, { updateUser })(App)












 /* { <Nav/> isAdmin={this.state.isAdmin} isUser={this.state.isUser}/> */
      /* {this.state.isAdmin ? (
        <Switch>
          <Route component={Home} exact path="/"/>
        <Route component={About} path='/About'/>
        <Route component={Calendar} path="/calendar"/>
        <Route component={Quotes} path='/quotes'/>
        <Route component={Schedule} path="/schedule"/>
        <Route component={Contact} path="/contact"/>
        <Route component={Appointment} path="/admin/appointment"/>
        <Route component={Users} path="/admin/users"/>
        </Switch> */