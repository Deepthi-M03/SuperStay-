import React from "react";

import { useParams } from "react-router-dom";

import dorms from "../data/dorms";

import BedSelector from "../components/BedSelector";

function HostelDetails() {

  const { id } = useParams();

  const hostel =
    dorms.find((item) =>
      item.id === parseInt(id)
    );

  return (

    <div className="container">

      <img
        src={hostel.image}
        alt={hostel.hostel}
        className="hostel-image"
      />

      <h1>{hostel.hostel}</h1>

      <h2>{hostel.dormName}</h2>

      <p>{hostel.type}</p>

      <BedSelector beds={hostel.beds} />

    </div>

  );
}

export default HostelDetails;