import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaBell,
  FaUserCircle
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {

  const [menuOpen,setMenuOpen] =
  useState(false);

  return (

    <nav className="navbar">

      <div className="container nav-container">

        {/* LOGO */}

        <Link
          to="/"
          className="logo"
        >

          SuperStay

        </Link>

        {/* DESKTOP LINKS */}

        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <Link to="/">
            Home
          </Link>

          <Link to="/search">
            Stays
          </Link>

          <Link to="/hostels">
            Hostels
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/dashboard">
            Guest Dashboard
          </Link>

          <Link to="/manager-dashboard">
            Manager Panel
          </Link>

          <Link to="/notifications">
            Notifications
          </Link>

        </div>

        {/* RIGHT SIDE */}

        <div className="nav-right">

          <Link
            to="/notifications"
            className="icon-btn"
          >

            <FaBell />

            <span className="badge">
              3
            </span>

          </Link>

          <Link
            to="/login"
            className="login-btn"
          >

            <FaUserCircle />

            Login

          </Link>

          {/* MOBILE MENU */}

          <div
            className="menu-toggle"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {
              menuOpen
              ?
              <FaTimes />
              :
              <FaBars />
            }

          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;