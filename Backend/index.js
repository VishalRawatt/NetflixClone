const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = "mongodb+srv://Vishal:vishal@vishalrawat.m0jxh57.mongodb.net/NetflixClone" ;
// const dotenv = require('dotenv');
// dotenv.config() ;

mongoose.connect(url)
.then(()=>{
    console.log('Database connection established')
})
.catch((err) =>{
    console.error(err) ;
}) ;

app.listen(8080, ()  => {
    console.log('Serving running on port 8080');
}) ;