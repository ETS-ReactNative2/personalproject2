import React from "react"

export default function Contact(){
    return(
        <div className="Thankyou">
        <div className='contactPage'>
           <div className="contactTitle"> Contact Information:</div>
            <br></br>
            <img id="phonePic" src={require('../download.png')} alt=""></img> Phone: 801-334-6788
            <br></br>
            <img id="phonePic" src={require('../email.png')} alt=""></img> Email: CamWilkey@gmail.com
            <br></br>


        </div>
        </div>
    )
}