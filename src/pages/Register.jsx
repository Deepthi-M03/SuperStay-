import React,{useState} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

import {
FaUser,
FaEnvelope,
FaLock
}
from "react-icons/fa";

function Register(){

const navigate =
useNavigate();

const[name,setName]=
useState("");

const[email,setEmail]=
useState("");

const[password,setPassword]=
useState("");

const register =
async()=>{

try{

await axios.post(

"http://localhost:5000/api/auth/register",

{
name,
email,
password
}

);

alert(
"Account Created Successfully"
);

navigate("/login");

}

catch{

alert(
"Registration Failed"
);

}

};


return(

<>

<style>

{`

.register-page{

display:flex;
height:100vh;
font-family:sans-serif;
background:#fff;

}


/* LEFT */

.left{

flex:1.2;

background:

linear-gradient(
rgba(0,0,0,.25),
rgba(0,0,0,.25)
),

url(
"https://images.unsplash.com/photo-1566073771259-6a8506099945"
);

background-size:cover;
background-position:center;

display:flex;

align-items:flex-end;

padding:70px;

color:white;

}


.overlay h1{

font-size:60px;
margin-bottom:20px;
line-height:1.1;

}


.overlay p{

font-size:18px;
line-height:1.8;

max-width:400px;

}



/* RIGHT */

.right{

width:520px;

display:flex;

justify-content:center;
align-items:center;

background:white;

}


.card{

width:360px;

}


.logo{

font-size:35px;

font-weight:700;

margin-bottom:40px;

color:#111827;

}


.card h2{

font-size:34px;

margin-bottom:8px;

}


.sub{

color:gray;

margin-bottom:35px;

}


.input{

display:flex;

gap:14px;

padding:18px;

border:

1px solid #ddd;

border-radius:14px;

margin-bottom:18px;

transition:.2s;

}


.input:hover{

border-color:

#2563eb;

}


.input input{

border:none;
outline:none;

width:100%;

font-size:15px;

}



button{

width:100%;

padding:17px;

border:none;

background:

#2563eb;

color:white;

font-size:16px;

border-radius:14px;

cursor:pointer;

font-weight:600;

}


button:hover{

background:

#1d4ed8;

}


.bottom{

margin-top:25px;

text-align:center;

color:gray;

}


.bottom a{

margin-left:8px;

color:#2563eb;

font-weight:600;

text-decoration:none;

}

`}

</style>



<div className="register-page">


{/* LEFT */}

<div className="left">

<div className="overlay">

<h1>

Start Your<br/>
Journey With<br/>
SuperStay

</h1>

<p>

Create an account to book
luxury stays, hostels and
premium travel experiences.

</p>

</div>

</div>



{/* RIGHT */}

<div className="right">

<div className="card">

<div className="logo">

SuperStay

</div>


<h2>

Create Account

</h2>

<p className="sub">

Join thousands of travellers

</p>



<div className="input">

<FaUser/>

<input

placeholder="Full Name"

onChange={(e)=>
setName(
e.target.value
)}

 />

</div>



<div className="input">

<FaEnvelope/>

<input

placeholder="Email"

onChange={(e)=>
setEmail(
e.target.value
)}

 />

</div>



<div className="input">

<FaLock/>

<input

type="password"

placeholder="Password"

onChange={(e)=>
setPassword(
e.target.value
)}

 />

</div>



<button
onClick={register}
>

Create Account

</button>



<div className="bottom">

Already have account?

<Link to="/login">

Login

</Link>

</div>


</div>

</div>

</div>

</>

);

}

export default Register;