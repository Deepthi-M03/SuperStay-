import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="container nav-container">

        <h2 className="logo">
          SuperStay
        </h2>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/search">
            Stays
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;