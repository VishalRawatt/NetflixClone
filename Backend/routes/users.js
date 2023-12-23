const router = require("express").Router() ;
const { response } = require("express");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");
require('dotenv').config() ;
const secretKey = process.env.SECRET_KEY ;

//Update
router.put("/:id", verify, async (req, res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, ).toString();
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {new : true});
            res.status(200).json(updatedUser);
        }catch(err){
            response.status(500).json(err) ;
        }
    }
    else{
        res.status(403).json("You can update only your account") ;
    }
})

//Delete
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User Deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can delete only your account");
    }
});

//Get

//Get ALL

//Get User stats

module.exports = router