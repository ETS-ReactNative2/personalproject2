import React from 'react'
import {Switch, Route} from "react-router-dom"
import Users from "./components/Users"
import Home from "./components/Home"
import Calendar from './components/Calendar'
import Appointment from './components/Appointment'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Quotes from './components/Quotes'
import About from './components/About'
import Thanks from './components/ThankYou'
import Review from './components/Reviews'

export default(
    <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={About} path='/About'/>
        <Route component={Calendar} path="/calendar"/>
        <Route component={Quotes} path='/quotes'/>
        <Route component={Schedule} path="/schedule"/>
        <Route component={Contact} path="/contact"/>
        <Route component={Appointment} path="/admin/appointment"/>
        <Route component={Users} path="/admin/users"/>
        <Route component={Thanks} path="/ThankYou"/>
        <Route component={Review} path="/reviews"/>
    </Switch>
)