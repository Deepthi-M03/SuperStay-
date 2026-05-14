import React, { useState } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";

import {
  auth,
  provider
} from "../firebase/firebase";

import {
  FaGoogle,
  FaEnvelope,
  FaLock
} from "react-icons/fa";

import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginGoogle = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      alert("Login Successful");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loginEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-left">
          <h1>SuperStay</h1>
          <p>Find your perfect stay with comfort, trust and ease.</p>
        </div>

        <div className="auth-right">

          <h2>Welcome Back</h2>
          <p className="sub">Login to continue</p>

          <form onSubmit={loginEmail}>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <FaLock />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="btn primary" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="divider">OR</div>

          <button className="btn google" onClick={loginGoogle} disabled={loading}>
            <FaGoogle /> Continue with Google
          </button>

          <p className="bottom-text">Forgot password?</p>
          <p className="bottom-text highlight">New here? Create account</p>

        </div>

      </div>

    </div>
  );
}

export default Login;