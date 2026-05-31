require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const app =
express();

app.use(cors());

app.use(express.json());

require("./config/mysql");


app.use(

"/api/auth",

require("./routes/authRoutes")

);


app.get("/",(req,res)=>{

res.send("Backend Running");

});


app.listen(

5000,

()=>{

console.log(
"Server running on 5000"
);

}

);