import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import GuestDashboard from "./pages/GuestDashboard";
import BookingDetail from "./pages/BookingDetail";
import Settings from "./pages/Settings";
import Wishlist from "./pages/Wishlist";

import PropertyDetails from "./pages/PropertyDetails";

import ManagerDashboard from "./pages/ManagerDashboard";
import MyProperties from "./pages/MyProperties";
import AddProperty from "./pages/AddProperty";
import Calendar from "./pages/Calendar";
import BookingManagement from "./pages/BookingManagement";
import Earnings from "./pages/Earnings";

import AdminDashboard from "./pages/AdminDashboard";
import AdminProperties from "./pages/AdminProperties";
import AdminUsers from "./pages/AdminUsers";
import AdminBookings from "./pages/AdminBookings";
import AdminReviews from "./pages/AdminReviews";
import AdminSettings from "./pages/AdminSettings";

import Booking from "./pages/Booking";

import "./styles/global.css";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* PUBLIC PAGES */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/search"
          element={<Search />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/faq"
          element={<FAQ />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        <Route
          path="/privacy"
          element={<Privacy />}
        />

        {/* AUTH */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* GUEST */}

        <Route
          path="/dashboard"
          element={<GuestDashboard />}
        />

        <Route
          path="/guest-dashboard"
          element={<GuestDashboard />}
        />

        <Route
          path="/account/bookings/:id"
          element={<BookingDetail />}
        />

        <Route
          path="/account/settings"
          element={<Settings />}
        />

        <Route
          path="/account/wishlist"
          element={<Wishlist />}
        />

        {/* BOOKING */}

        <Route
          path="/booking"
          element={<Booking />}
        />

        {/* PROPERTY MANAGER */}

        <Route
          path="/manager/dashboard"
          element={<ManagerDashboard />}
        />

        <Route
          path="/manager-dashboard"
          element={<ManagerDashboard />}
        />

        <Route
          path="/manager/properties"
          element={<MyProperties />}
        />

        <Route
          path="/manager/properties/new"
          element={<AddProperty />}
        />

        <Route
          path="/manager/calendar/:id"
          element={<Calendar />}
        />

        <Route
          path="/manager/bookings"
          element={<BookingManagement />}
        />

        <Route
          path="/manager/earnings"
          element={<Earnings />}
        />

        {/* ADMIN */}

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/properties"
          element={<AdminProperties />}
        />

        <Route
          path="/admin/users"
          element={<AdminUsers />}
        />

        <Route
          path="/admin/bookings"
          element={<AdminBookings />}
        />

        <Route
          path="/admin/reviews"
          element={<AdminReviews />}
        />

        <Route
          path="/admin/settings"
          element={<AdminSettings />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;