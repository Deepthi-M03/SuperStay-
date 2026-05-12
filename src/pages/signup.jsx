import React from "react";

function Signup() {

  return (

    <div className="form-container">

      <h2>Create Account</h2>

      <input type="text" placeholder="Full Name" />

      <input type="email" placeholder="Email" />

      <input type="password" placeholder="Password" />

      <button className="btn">
        Register
      </button>

    </div>

  );
}

export default Signup;