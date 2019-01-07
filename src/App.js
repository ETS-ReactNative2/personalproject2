import React, { Component } from 'react';
import './App.css';
import routes from "./routes"
import Nav from './components/Nav'
import { Link } from 'react-router-dom'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './components/CheckoutForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAdmin: false,
      isUser: false
    }
  }



  render() {

    return (
      <div className="App">
        <Nav />
        <div className='tabs'>
          <Link to="/"><button className="nav"><span>HOME</span></button></Link>
          <Link to="/about"><button className="nav"><span>ABOUT</span></button></Link>
          <Link to="/contact"><button className="nav"><span>CONTACT</span> </button></Link>

        </div>


        <div className='backgroundImg'>
         
           

          {routes}
        </div>
        <div className='bottomBorder'></div>

      </div>
    );
  }
}

export default App;












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