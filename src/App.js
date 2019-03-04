import React, { Component } from 'react';
import './App.css';
import routes from "./routes"
import Nav from './components/Nav'
import {Link} from 'react-router-dom'
// import {Switch, Route} from "react-router-dom"
// import Users from "./components/Users"
// import Home from "./components/Home"
// import Calendar from './components/Calendar'
// import Appointment from './components/Appointment'
// import Schedule from './components/Schedule'
// import Contact from './components/Contact'
// import Quotes from './components/Quotes'
// import About from './components/About'

class App extends Component {
  constructor(){
    super()
    this.state={
      isAdmin: false,
      isUser: false
    }
  }
 
  

  render() {
    
    return (
      <div className="App">
      <Nav/>
      <div className='tabs'>
                    <Link to="/"><div className="nav">HOME</div></Link>
                        <Link to="/about"><div className="nav">ABOUT</div></Link>
                        <Link to="/reviews"><div className="nav">CUSTOMER REVIEWS </div></Link>
                        <Link to="/contact"><div className="nav">CONTACT </div></Link>
                        
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