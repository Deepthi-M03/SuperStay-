import React, { useState } from "react";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase/firebase";

function Register() {

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const registerUser = async(e) => {

    e.preventDefault();

    try{

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Registration Successful");

    }

    catch(error){

      alert(error.message);

    }

  };

  return (

    <div>

      <form onSubmit={registerUser}>

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>

  );
}

export default Register;