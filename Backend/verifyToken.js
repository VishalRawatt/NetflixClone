const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY || '12DHCKS';

function verify(req, res, next) {
    const authHeader = req.headers.token ;
    if(authHeader){
        const token = authHeader.split(" ")[1] ;

        jwt.verify(token,secretKey,(err,user)=>{
            if(err) res.status(403).json("Invalid token") ;
            req.user = user ;
            next() ;
        })
    }else{
        return res.status(401).json("You are not authenticated"); 
    }
}

module.exports = verify;