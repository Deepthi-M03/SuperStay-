import React from "react";
import { useNavigate } from "react-router-dom";

import {
FaSearch,
FaCalendarCheck,
FaHome
}
from "react-icons/fa";

import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";

import properties from "../data/properties";

function Home() {

const navigate = useNavigate();

return (

<div>

{/* HERO */}

<Hero />



{/* FEATURED STAYS */}

<section className="featured-section container">

<div className="section-header">

<div>

<h2>
Featured Luxury Stays
</h2>

<p>
Explore premium villas,
apartments and luxury resorts
across India.
</p>

</div>


<button
className="view-btn"

onClick={() =>
navigate("/search")
}
>

View All

</button>

</div>



<div className="property-grid">

{

properties
.slice(0,6)

.map((property)=>(

<div

key={property.id}

onClick={() =>
navigate(
`/property/${property.id}`
)
}

style={{
cursor:"pointer"
}}

>

<PropertyCard
property={property}
/>

</div>

))

}

</div>

</section>



{/* HOW SUPERSTAY WORKS */}

<section className="how-section">

<div className="container">

<h2 className="section-title">

How SuperStay Works

</h2>



<div className="how-grid">


{/* SEARCH */}

<div

className="how-card"

onClick={() =>
navigate("/search")
}

>

<div className="how-icon">

<FaSearch/>

</div>

<h3>

Search

</h3>

<p>

Find stays easily

</p>

</div>




{/* BOOK */}

<div

className="how-card"

onClick={() =>
navigate("/booking")
}

>

<div className="how-icon">

<FaCalendarCheck/>

</div>

<h3>

Book

</h3>

<p>

Reserve instantly

</p>

</div>




{/* STAY */}

<div

className="how-card"

onClick={() =>
navigate("/hostels")
}

>

<div className="how-icon">

<FaHome/>

</div>

<h3>

Stay

</h3>

<p>

Enjoy premium comfort

</p>

</div>



</div>

</div>

</section>



{/* POPULAR DESTINATIONS */}

<section className="destination-section container">

<h2 className="section-title">

Popular Destinations

</h2>



<div className="destination-grid">



<div

className="destination-card"

onClick={() =>
navigate("/search?location=Goa")
}

>

<img

src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200"

alt="Goa"

/>

<h3>

Goa

</h3>

</div>




<div

className="destination-card"

onClick={() =>
navigate("/search?location=Manali")
}

>

<img

src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200"

alt="Manali"

/>

<h3>

Manali

</h3>

</div>




<div

className="destination-card"

onClick={() =>
navigate("/search?location=Mumbai")
}

>

<img

src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200"

alt="Mumbai"

/>

<h3>

Mumbai

</h3>

</div>



</div>

</section>



{/* TESTIMONIALS */}

<section className="testimonial-section">

<div className="container">

<h2 className="section-title">

Guest Testimonials

</h2>



<div className="testimonial-grid">


{/* EXISTING REVIEWS */}

<div className="testimonial-card">

<img
src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=500"
alt=""
/>

<h3>

Kavya Srinivasan

</h3>

<p>

★★★★★

</p>

<p>

Wonderful hospitality and
beautiful luxury stay.

</p>

</div>



<div className="testimonial-card">

<img
src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500"
alt=""
/>

<h3>

Arjun Kumar

</h3>

<p>

★★★★★

</p>

<p>

Booking experience was smooth.

</p>

</div>



<div className="testimonial-card">

<img
src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500"
alt=""
/>

<h3>

Meena Lakshmi

</h3>

<p>

★★★★★

</p>

<p>

Excellent service and food.

</p>

</div>



{/* USER REVIEWS */}

{

JSON.parse(
localStorage.getItem(
"reviews"
)
||"[]"

).map(

(review,index)=>(

<div
key={index}

className="testimonial-card"
>

<h3>

{review.name}

</h3>

<p>

{"★".repeat(
review.rating
)}

</p>

<p>

{review.comment}

</p>

</div>

))

}


</div>

</div>

</section>

</div>

);

}

export default Home;