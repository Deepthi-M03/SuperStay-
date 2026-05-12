import React from "react";

function Contact() {

  return (

    <div className="contact-page">

      <div className="contact-hero">

        <h1>
          Contact SuperStay
        </h1>

        <p>
          We are here to help you 24/7
        </p>

      </div>

      <div className="container contact-container">

        <div className="contact-info">

          <h2>
            Get In Touch
          </h2>

          <p>
            Email:
            support@superstay.com
          </p>

          <p>
            Phone:
            +91 9876543210
          </p>

          <p>
            Address:
            Chennai, Tamil Nadu, India
          </p>

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

        </div>

        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button className="btn">
            Send Message
          </button>

        </div>

      </div>

    </div>

  );
}

export default Contact;