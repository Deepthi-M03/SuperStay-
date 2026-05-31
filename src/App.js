import React from "react";
import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotificationBar from "./components/NotificationBar";

/* PAGES */

import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";

import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import PropertyDetails from "./pages/PropertyDetails";

import Booking from "./pages/Booking";

import Hostels from "./pages/Hostels";
import HostelDetails from "./pages/HostelDetails";

import Notifications from "./pages/Notifications";

/* ADMIN */

import AdminDashboard from "./pages/AdminDashboard";
import AdminProperties from "./pages/AdminProperties";
import AdminUsers from "./pages/AdminUsers";
import AdminBookings from "./pages/AdminBookings";
import AdminReviews from "./pages/AdminReviews";
import AdminSettings from "./pages/AdminSettings";

import "./styles/global.css";


function App(){

return(

<BrowserRouter>

<NotificationBar/>

<Navbar/>


<Routes>


{/* HOME */}

<Route

path="/"

element={<Home/>}

/>



{/* SEARCH */}

<Route

path="/search"

element={<Search/>}

/>



{/* PROPERTY */}

<Route

path="/property/:id"

element={<PropertyDetails/>}

/>



{/* BOOKING */}

<Route

path="/booking"

element={<Booking/>}

/>



{/* HOSTELS */}

<Route

path="/hostels"

element={<Hostels/>}

/>


<Route

path="/hostel/:id"

element={<HostelDetails/>}

/>



{/* AUTH */}

<Route

path="/login"

element={<Login/>}

/>


<Route

path="/register"

element={<Register/>}

/>



{/* INFO */}

<Route

path="/about"

element={<About/>}

/>


<Route

path="/contact"

element={<Contact/>}

/>


<Route

path="/faq"

element={<FAQ/>}

/>


<Route

path="/terms"

element={<Terms/>}

/>


<Route

path="/privacy"

element={<Privacy/>}

/>



{/* ADMIN */}

<Route

path="/admin/dashboard"

element={<AdminDashboard/>}

/>


<Route

path="/admin/properties"

element={<AdminProperties/>}

/>


<Route

path="/admin/users"

element={<AdminUsers/>}

/>


<Route

path="/admin/bookings"

element={<AdminBookings/>}

/>


<Route

path="/admin/reviews"

element={<AdminReviews/>}

/>


<Route

path="/admin/settings"

element={<AdminSettings/>}

/>



{/* NOTIFICATIONS */}

<Route

path="/notifications"

element={<Notifications/>}

/>


</Routes>


<Footer/>


</BrowserRouter>

);

}


export default App;