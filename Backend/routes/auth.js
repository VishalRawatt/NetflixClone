const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
require('dotenv').config() ;
const secretKey = process.env.SECRET_KEY || '12DHCKS';


//Register
router.post("/register",  async(req, res) =>{
    const  newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, secretKey).toString()
    }) ;
     const user = await newuser.save() ;
     res.status(201).json(user);
})

//Login
router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email}) ;
        !user && res.status(401).json("Wrong Username") ;

        //12DHCKS is a random string could be any large or small

        const bytes  = CryptoJS.AES.decrypt(user.password, secretKey);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if(originalPassword !== req.body.password){ 
          res.status(401).json("Wrong password") ;
        }

        const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin},secretKey,{expiresIn:"1d"});

        const { password, ...info } = user._doc ;

        res.status(200).json({...info,accessToken});
    }catch(err){
        res.status(500).json(err) ;
    }
})

module.exports = router ;