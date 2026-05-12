import React from "react";

function Register() {

  return (

    <div className="container">

      <div className="login-box">

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button className="btn">
          Register
        </button>

      </div>

    </div>

  );
}

export default Register;