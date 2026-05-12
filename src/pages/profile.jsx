import React from "react";

function Profile() {

  return (

    <div className="container">

      <h1>Profile Settings</h1>

      <input type="text" placeholder="Name" />

      <input type="email" placeholder="Email" />

      <button className="btn">
        Save Changes
      </button>

    </div>

  );
}

export default Profile;