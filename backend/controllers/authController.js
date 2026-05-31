const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const mysql = require("../config/mysql");

exports.register = async (req,res)=>{

try{

const {name,email,password}=req.body;

const hashed =
await bcrypt.hash(password,10);

await mysql.query(

"INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)",

[name,email,hashed,"guest"]

);

res.json({
message:"Registered"
});

}

catch(err){

res.status(500).json(err);

}

};



exports.login = async(req,res)=>{

try{

const {email,password}=req.body;

const [user] =
await mysql.query(

"SELECT * FROM users WHERE email=?",

[email]

);

if(user.length===0){

return res.status(400)
.json({
message:"User not found"
});

}

const valid =
await bcrypt.compare(
password,
user[0].password
);

if(!valid){

return res.status(400)
.json({
message:"Wrong password"
});

}

const token =
jwt.sign(

{id:user[0].id},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);

res.json({

token,

user:{

id:user[0].id,

name:user[0].name,

email:user[0].email,

role:user[0].role

}

});

}

catch(err){

res.status(500).json(err);

}

};