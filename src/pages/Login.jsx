import React from "react";

function Login() {

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to continue your luxury stay experience
        </p>

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button className="btn login-btn">
          Login
        </button>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="login-link">
          Don't have an account?
        </p>

      </div>

    </div>

  );
}

export default Login;