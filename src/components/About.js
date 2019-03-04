import React, { Component } from "react"
import {Slide} from 'react-slideshow-image'

export default class About extends Component{
    render(){
        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
          }

          const Slideshow = () => {
            return (
              <Slide {...properties}>
               
                <div className="each-slide2">
                 
                </div>
                <div className="each-slide1">
                 
                </div>
                <div className='each-slide3'>

                </div>
              </Slide>
            )
        }

    return(
        <div className="aboutBody">
        <Slideshow/>
        
        <div className='about'>
        <div className='textContainer'>
        <h1>About Me!</h1>
           <text>
            I am A father of two with a beautiful wife McKaye. We live in Pleasant grove utah.<br/> I come from a big family. Two of my Brothers and my self are firefighters for different <br/> departments in Utah Valley. Just as my family and I serve our community in an emergency.<br/> I look to serve my community by getting your windows looking as beautiful as the day they were installed!
            </text>
        </div>
        </div>
        </div>
    )
    }
}
