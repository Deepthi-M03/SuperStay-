import React from 'react'

function Confirmation() {

  return (

    <div className='container'>

      <h1>Booking Confirmed</h1>

      <div className='confirm-box'>

        <h2>Booking Reference: SS10245</h2>

        <p>Property: Luxury Beach Villa</p>

        <p>Guests: 4</p>

        <p>Total Paid: ₹24000</p>

        <button className='btn'>View Booking</button>

      </div>

    </div>
  )
}

export default Confirmation