import React, { useState } from "react";
import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaPaperPlane,
  FaWhatsapp
} from "react-icons/fa";

function Contact() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const phone = "919876543210";
    const text = `Hello SuperStay\nName: ${name}\nMessage: ${message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="contact-page">

      <div className="contact-card">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>We usually respond within minutes</p>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope />
              <span>support@superstay.com</span>
            </div>

            <div className="info-item">
              <FaPhone />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <div className="input-box">
            <FaUser />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-box">
            <FaEnvelope />
            <input type="email" placeholder="Email Address" />
          </div>

          <textarea
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
          />

          <button className="btn primary">
            <FaPaperPlane /> Send Message
          </button>

          <button className="btn whatsapp" onClick={sendWhatsApp}>
            <FaWhatsapp /> WhatsApp Chat
          </button>

        </div>

      </div>

    </div>
  );
}

export default Contact;