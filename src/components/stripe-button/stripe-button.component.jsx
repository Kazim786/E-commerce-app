import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import '/Users/apple/E-Commerce/king-clothing/src/components/stripe-button/stripe-button.styles.scss'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_1kLvgaBJT0tOy4sNHhEahAlB00HwBSNtaw'
    

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return(
        <StripeCheckout 
            label= 'Pay Now'
            name= 'King Clothing Ltd'
            billingAddress
            shippingAddress
            image= 'https://sendeyo.com/up/d/f3eb2117da'
            description= {`The total for you is ${price}`}
            amount = {priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
        />
    )
}

export default StripeCheckoutButton