import React, { Component } from 'react';
import axios from 'axios'

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            complete: false
         }
         this.submit=this.submit.bind(this)
    }
    async submit(ev){
        let {token}= await this.props.stripe.createToken({name: "Name"})
        let response = await fetch("/charge",{
            method: "post",
            headers: {"Content-Type": "text/plain"},
            body: token.id
        })
        if (response.ok) console.log("purchase Complete")
    }  

    render() { 
        if (this.state.complete) return <h1>Purchase Complete</h1>
        return ( 
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
            <div className="example">
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </StripeProvider>
         );
    }
}
 
export default Checkout;