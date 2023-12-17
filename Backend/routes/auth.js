const router = require('express').Router();
const User = require('../models/User');

//Register
router.post("/register",  (req, res) =>{
    const  newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.body.profilePicture,
        isAdmin: req.body.isAdmin,
    })
})