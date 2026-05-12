import React from "react";

function SearchBar() {

  return (

    <div className="search-bar">

      <input
        type="text"
        placeholder="Search destinations"
      />

      <input type="date" />

      <input type="date" />

      <button className="btn">
        Search
      </button>

    </div>

  );
}

export default SearchBar;