import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaSnowflake,
  FaHeart,
  FaRegHeart,
  FaUserFriends,
  FaBed,
  FaBath,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

import properties from "../data/properties";
import "./PropertyDetails.css";

function PropertyDetails() {

  const { id } = useParams();

  const property =
    properties.find(
      p => p.id === Number(id)
    );

  const [saved,setSaved] =
    useState(false);

  const [imageIndex,setImageIndex] =
    useState(0);

  const [name,setName] =
    useState("");

  const [review,setReview] =
    useState("");

  const [rating,setRating] =
    useState(0);

  const [reviews,setReviews] =
    useState(
      JSON.parse(
        localStorage.getItem("reviews")
      ) || []
    );

  const [checkIn,setCheckIn] =
    useState("");

  const [checkOut,setCheckOut] =
    useState("");

  const [guests,setGuests] =
    useState("1");


  if(!property){
    return <h1>Property not found</h1>;
  }

  const images =
    property.images ||
    [property.image];


  /* FILTER REVIEWS FOR THIS PROPERTY */

  const propertyReviews =
    reviews.filter(
      r =>
      r.propertyId === id
    );

  const avgRating =

    propertyReviews.length

    ?

    (

      propertyReviews.reduce(

        (sum,r)=>

        sum +
        Number(r.rating),

        0

      )

      /

      propertyReviews.length

    ).toFixed(1)

    :

    0;


  const nextImage = ()=>{

    setImageIndex(

      imageIndex===images.length-1

      ?0

      :imageIndex+1

    );

  };


  const prevImage = ()=>{

    setImageIndex(

      imageIndex===0

      ?

      images.length-1

      :

      imageIndex-1

    );

  };


  const submitReview = ()=>{

    if(
      !name ||
      !review ||
      !rating
    ){

      alert(
        "Fill all fields"
      );

      return;

    }


    const newReview={

      propertyId:id,

      name,

      comment:review,

      rating

    };


    const updated=[

      ...reviews,

      newReview

    ];


    setReviews(
      updated
    );


    localStorage.setItem(

      "reviews",

      JSON.stringify(
        updated
      )

    );


    setName("");
    setReview("");
    setRating(0);

  };


  const reserveStay=()=>{

    alert(
      "Booking saved"
    );

  };



return(

<div className="property-page">


{/* IMAGE */}

<div className="property-hero">

<img
src={images[imageIndex]}
alt=""
/>


<button
className="gallery-btn left"
onClick={prevImage}
>

<FaArrowLeft/>

</button>


<button
className="gallery-btn right"
onClick={nextImage}
>

<FaArrowRight/>

</button>


</div>



<div className="property-container">


{/* LEFT */}

<div className="property-left">


<div className="property-header">

<div>

<h1>

{property.title}

</h1>


<p className="location">

<FaMapMarkerAlt/>

{property.location}

</p>

</div>



<button

className="save-btn"

onClick={()=>
setSaved(
!saved
)
}

>

{

saved

?

<FaHeart/>

:

<FaRegHeart/>

}

Save

</button>


</div>



<div className="stats-bar">

<div>

<FaUserFriends/>

6 Guests

</div>


<div>

<FaBed/>

3 Beds

</div>


<div>

<FaBath/>

2 Baths

</div>

</div>



<div className="section">

<h2>

About Stay

</h2>

<p>

{property.description}

</p>

</div>



<div className="section">

<h2>

Amenities

</h2>


<div className="amenities-grid">

<div>

<FaWifi/>

Wifi

</div>


<div>

<FaSwimmingPool/>

Pool

</div>


<div>

<FaParking/>

Parking

</div>


<div>

<FaSnowflake/>

AC

</div>


</div>

</div>



{/* REVIEW */}

<div className="section">

<h2>

Guest Reviews

</h2>



<input

placeholder="Name"

value={name}

onChange={(e)=>
setName(
e.target.value
)
}

/>



<textarea

placeholder=
"Write review"

value={review}

onChange={(e)=>
setReview(
e.target.value
)
}

/>



{/* CLICKABLE STARS */}

<div className="rating-stars">

{

[1,2,3,4,5].map(

(star)=>(

<FaStar

key={star}

onClick={()=>
setRating(
star
)
}

style={{

cursor:"pointer",

fontSize:"28px",

color:

star <= rating

?

"gold"

:

"#ccc"

}}

 />

))

}

</div>


<p>

Selected:

{rating}

Stars

</p>



<button
onClick={
submitReview
}
>

Submit Review

</button>



{

propertyReviews.map(

(r,index)=>(

<div
key={index}
className="review-card"
>

<h4>

{r.name}

</h4>


<div>

{

[...Array(
r.rating
)].map(

(_,i)=>

<FaStar
key={i}
color="gold"
/>

)

}

</div>


<p>

{r.comment}

</p>

</div>

))

}

</div>


</div>



{/* BOOKING */}

<div className="booking-widget">

<h2>

₹{property.price}

<span>

/night

</span>

</h2>



{/* LIVE RATING */}

<div className="rating-row">

<FaStar color="gold"/>

<span>

{avgRating}

(

{propertyReviews.length}

reviews )

</span>

</div>



<input
type="date"
value={checkIn}
onChange={(e)=>
setCheckIn(
e.target.value
)}
/>


<input
type="date"
value={checkOut}
onChange={(e)=>
setCheckOut(
e.target.value
)}
/>


<select

value={guests}

onChange={(e)=>
setGuests(
e.target.value
)
}

>

<option>
1 Guest
</option>

<option>
2 Guests
</option>

<option>
4 Guests
</option>

<option>
6 Guests
</option>

</select>



<button
className="reserve-btn"
onClick={reserveStay}
>

Reserve Now

</button>



<div className="instant-book">

<FaCheckCircle/>

Instant Book

</div>

</div>


</div>

</div>

);

}

export default PropertyDetails;