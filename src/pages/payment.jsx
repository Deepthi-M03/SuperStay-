import React from 'react'
import { useNavigate } from 'react-router-dom'

function Payment() {

  const navigate = useNavigate()

  const handlePayment = () => {

    alert('Payment Successful')

    navigate('/confirmation')
  }

  return (

    <div className='container'>

      <h1>Payment</h1>

      <div className='payment-box'>

        <input type='text' placeholder='Card Number' />

        <input type='text' placeholder='Card Holder Name' />

        <input type='text' placeholder='Expiry Date' />

        <input type='text' placeholder='CVV' />

        <button className='btn' onClick={handlePayment}>
          Confirm & Pay
        </button>

      </div>

    </div>
  )
}

export default Payment