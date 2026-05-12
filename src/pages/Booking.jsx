import React, { useState } from "react";

function Booking() {

  const [step,setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (

    <div className="booking-page container">

      <h1>
        Online Booking System
      </h1>

      {/* STEP 1 */}

      {
        step === 1 && (

          <div className="booking-card">

            <h2>
              Trip Summary
            </h2>

            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <p>
              Luxury Beach Villa - Goa
            </p>

            <p>
              Dates: 10 Jun - 15 Jun
            </p>

            <p>
              Guests: 4
            </p>

            <p>
              Cleaning Fee: ₹1500
            </p>

            <p>
              Service Fee: ₹800
            </p>

            <h3>
              Total: ₹54,000
            </h3>

            <button
              className="btn"
              onClick={nextStep}
            >
              Continue
            </button>

          </div>

        )
      }

      {/* STEP 2 */}

      {
        step === 2 && (

          <div className="booking-card">

            <h2>
              Guest Details
            </h2>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />

            <textarea
              placeholder="Special Requests"
            ></textarea>

            <label>

              <input type="checkbox" />

              I agree to House Rules
              and Cancellation Policy

            </label>

            <button
              className="btn"
              onClick={nextStep}
            >
              Continue To Payment
            </button>

          </div>

        )
      }

      {/* STEP 3 */}

      {
        step === 3 && (

          <div className="booking-card">

            <h2>
              Payment
            </h2>

            <input
              type="text"
              placeholder="Card Number"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
            />

            <input
              type="text"
              placeholder="Promo Code"
            />

            <h3>
              Total: ₹54,000
            </h3>

            <p>
              Secure SSL Payment
            </p>

            <button
              className="btn"
              onClick={nextStep}
            >
              Confirm & Pay
            </button>

          </div>

        )
      }

      {/* STEP 4 */}

      {
        step === 4 && (

          <div className="booking-card success-card">

            <h1>
              Booking Confirmed
            </h1>

            <h2>
              REF: SS2026GOA89
            </h2>

            <p>
              Luxury Beach Villa - Goa
            </p>

            <p>
              Guests: 4
            </p>

            <p>
              Total Paid: ₹54,000
            </p>

            <p>
              Check-in Instructions sent to email.
            </p>

            <div className="confirm-buttons">

              <button className="btn">
                View Booking
              </button>

              <button className="btn secondary-btn">
                Explore More Stays
              </button>

            </div>

          </div>

        )
      }

    </div>

  );
}

export default Booking;