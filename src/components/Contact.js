import React from "react"

export default function Contact(){
    return(
        <div className="contact-container">
        <div className='contactPage'>
            <div className='title'>Contact Information:</div>
            <br></br>
            <div className='phone'> <img alt='phone svg' src={require('../images/phone.svg')}/> Phone: 801-334-6788</div>
            <br></br>
            <div className='email'> <img alt='email svg' src={require('../images/email.png')}/>Email: CamWilkey@gmail.com</div>
            <br></br>


        </div>
        
        </div>
    )
}