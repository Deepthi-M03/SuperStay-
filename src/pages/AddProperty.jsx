import React, { useState } from "react";
import { saveProperty } from "../utils/managerStorage";

function AddProperty() {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !location || !price) {
      alert("Fill all fields");
      return;
    }

    const newProperty = {
      id: Date.now(),
      title,
      location,
      price
    };

    saveProperty(newProperty);

    alert("Property Added");

    setTitle("");
    setLocation("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddProperty;