import React,{useState} from "react";
import axios from "axios";
import {
FaEnvelope,
FaLock,
FaEye,
FaEyeSlash
}
from "react-icons/fa";

import { Link,useNavigate }
from "react-router-dom";

import "./Login.css";

function Login(){

const navigate =
useNavigate();

const[email,setEmail]=
useState("");

const[password,setPassword]=
useState("");

const[show,setShow]=
useState(false);


const handleLogin =
async()=>{

try{

const res =
await axios.post(

"http://localhost:5000/api/auth/login",

{

email,
password

}

);


localStorage.setItem(

"token",

res.data.token

);


localStorage.setItem(

"user",

JSON.stringify(
res.data.user
)

);


alert(
"Login Success"
);

navigate("/");


}

catch(err){

alert(
"Wrong email/password"
);

}

};



return(

<div className="login-page">

<div className="login-left">

<div className="overlay">

<h1>

Luxury stays.<br/>
Simple booking.

</h1>

<p>

Premium villas,
resorts &
hostels.

</p>

</div>

</div>



<div className="login-right">

<div className="login-box">


<div className="brand">

SuperStay

</div>


<h2>

Welcome Back

</h2>


<div className="input">

<FaEnvelope/>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>
setEmail(
e.target.value
)}

 />

</div>



<div className="input">

<FaLock/>

<input

type={
show
?
"text"
:
"password"
}

placeholder="Password"

value={password}

onChange={(e)=>
setPassword(
e.target.value
)}

 />


<div
onClick={()=>
setShow(!show)
}
>

{
show
?
<FaEyeSlash/>
:
<FaEye/>
}

</div>

</div>



<button
onClick={
handleLogin
}
>

Login

</button>



<div className="bottom">

Don't have account?

<Link to="/register">

Register

</Link>

</div>


</div>

</div>

</div>

);

}

export default Login;