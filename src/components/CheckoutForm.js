import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import {Elements,StripeProvider} from 'react-stripe-elements'


class CheckoutForm extends Component{
    constructor(props){
        super(props);
        this.submit=this.submit.bind
    }
    async submit(ev){

    }
    render(){
        return(
            <div className="Checkout">
            <p> Would you like to complete this purchase?</p>
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          
            <CardElement/>
          
        </div>
      </StripeProvider>
            <button onClick={this.submit}>Send</button>
            </div>
        )
    }
}
export default injectStripe(CheckoutForm)