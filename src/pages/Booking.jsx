import React, { useState } from "react";

import {
  FaCreditCard,
  FaLock,
  FaCheckCircle,
  FaGoogle,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaQrcode
} from "react-icons/fa";

import QRCode from "react-qr-code";

import "./Booking.css";

function Booking() {

  const [step,setStep] = useState(1);

  const [promo,setPromo] = useState("");

  const [discount,setDiscount] = useState(0);

  const [paymentSuccess,setPaymentSuccess] =
  useState(false);

  const totalPrice = 54000 - discount;

  const nextStep = () => {

    setStep(step + 1);

  };

  const applyPromo = () => {

    if(promo === "SUPER10"){

      setDiscount(5000);

      alert("Promo Applied");

    }

    else{

      alert("Invalid Promo Code");

    }

  };

  const confirmPayment = () => {

    setPaymentSuccess(true);

    setTimeout(()=>{

      setStep(4);

    },1500);

  };

  return (

    <div className="booking-page">

      <div className="booking-container">

        <h1>
          Online Booking System
        </h1>

        <div className="booking-steps">

          <span className={step >= 1 ? "active" : ""}>
            1
          </span>

          <span className={step >= 2 ? "active" : ""}>
            2
          </span>

          <span className={step >= 3 ? "active" : ""}>
            3
          </span>

          <span className={step >= 4 ? "active" : ""}>
            4
          </span>

        </div>

        {/* STEP 1 */}

        {
          step === 1 && (

            <div className="booking-card">

              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />

              <div className="summary-content">

                <h2>
                  Luxury Beach Villa - Goa
                </h2>

                <p>
                  <FaMapMarkerAlt />
                  Goa, India
                </p>

                <p>
                  <FaCalendarAlt />
                  10 Jun - 15 Jun
                </p>

                <p>
                  Guests: 4 Adults
                </p>

                <div className="price-box">

                  <div>
                    <span>
                      Base Price
                    </span>

                    <span>
                      ₹51,700
                    </span>
                  </div>

                  <div>
                    <span>
                      Cleaning Fee
                    </span>

                    <span>
                      ₹1,500
                    </span>
                  </div>

                  <div>
                    <span>
                      Service Fee
                    </span>

                    <span>
                      ₹800
                    </span>
                  </div>

                </div>

                <h3>
                  Total: ₹54,000
                </h3>

                <button
                  className="main-btn"
                  onClick={nextStep}
                >
                  Continue
                </button>

              </div>

            </div>

          )
        }

        {/* STEP 2 */}

        {
          step === 2 && (

            <div className="booking-card form-card">

              <h2>
                Guest Details
              </h2>

              <div className="google-login">

                <FaGoogle />

                Continue with Google

              </div>

              <div className="input-box">

                <FaUser />

                <input
                  type="text"
                  placeholder="Full Name"
                />

              </div>

              <div className="input-box">

                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <div className="input-box">

                <FaPhone />

                <input
                  type="text"
                  placeholder="Phone Number"
                />

              </div>

              <textarea
                placeholder="Special Requests"
              ></textarea>

              <label className="checkbox">

                <input type="checkbox" />

                I agree to House Rules
                and Cancellation Policy

              </label>

              <button
                className="main-btn"
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

            <div className="booking-card form-card">

              <h2>
                Secure Payment
              </h2>

              <div className="payment-methods">

                <span>
                  Visa
                </span>

                <span>
                  Mastercard
                </span>

                <span>
                  UPI
                </span>

                <span>
                  Razorpay
                </span>

              </div>

              <div className="input-box">

                <FaCreditCard />

                <input
                  type="text"
                  placeholder="Card Number"
                />

              </div>

              <div className="input-box">

                <FaUser />

                <input
                  type="text"
                  placeholder="Card Holder Name"
                />

              </div>

              <div className="promo-box">

                <input
                  type="text"
                  placeholder="Promo Code"
                  value={promo}
                  onChange={(e)=>
                    setPromo(e.target.value)
                  }
                />

                <button onClick={applyPromo}>
                  Apply
                </button>

              </div>

              {
                discount > 0 && (

                  <div className="discount-box">

                    ₹{discount} Discount Applied

                  </div>

                )
              }

              <h3>
                Total: ₹{totalPrice}
              </h3>

              <p className="secure">

                <FaLock />

                Secure SSL Payment Gateway

              </p>

              <button
                className="main-btn"
                onClick={confirmPayment}
              >

                Confirm & Pay

              </button>

              {
                paymentSuccess && (

                  <div className="payment-success">

                    <FaCheckCircle />

                    Payment Successful

                  </div>

                )
              }

            </div>

          )
        }

        {/* STEP 4 */}

        {
          step === 4 && (

            <div className="booking-card success-card">

              <FaCheckCircle className="success-icon" />

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
                Total Paid: ₹{totalPrice}
              </p>

              <p>
                Check-in Instructions sent to email.
              </p>

              <div className="qr-box">

                <h3>
                  QR Check-In
                </h3>

                <QRCode
                  value="SUPERSTAY-BOOKING-2026"
                  size={140}
                />

              </div>

              <div className="confirm-buttons">

                <button className="main-btn">
                  View Booking
                </button>

                <button className="secondary-btn">
                  Explore More Stays
                </button>

              </div>

            </div>

          )
        }

      </div>

    </div>

  );
}

export default Booking;