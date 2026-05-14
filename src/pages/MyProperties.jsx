import React, { useEffect, useState } from "react";
import { getProperties, removeProperty } from "../utils/managerStorage";

function MyProperties() {

  const [properties, setProperties] = useState([]);

  const loadData = () => {
    setProperties(getProperties());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id) => {
    removeProperty(id);
    loadData();
  };

  return (
    <div>

      <h2>My Properties</h2>

      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        properties.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.location}</p>
            <p>{item.price}</p>

            <button onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </div>
        ))
      )}

    </div>
  );
}

export default MyProperties;