const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = "mongodb+srv://Vishal:vishal@vishalrawat.m0jxh57.mongodb.net/NetflixClone" ;
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

mongoose.connect(url)
.then(()=>{
    console.log('Database connection established')
})
.catch((err) =>{
    console.error(err) ;
}) ;

app.use(express.json());
app.use("/api/auth",authRoute) ;
app.use("/api/users",userRoute) ;
app.use("/api/movies",movieRoute) ;
app.use("/api/lists",listRoute) ; 

app.listen(8080, ()  => {
    console.log('Serving running on port 8080');
}) ;