import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Iv74XDiONvdRFiAWaD4I5wUGh0HSPACILQjUnIwEE9JfDmslAeUQOmeXuYxKYluMTOJKXa3T4vkGTSpsvV4AFjz00rMvcX9O3'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error))
      alert('There was an issue with your payment. Please check the provided credit card details')
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Commerce Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;