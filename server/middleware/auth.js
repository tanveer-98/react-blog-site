const jwt  = require('jsonwebtoken');
const User = require('../models/User')

const  auth  = async (req,res,next)=>{

    console.log('auth middleware')

    try{
        // const token = req.header('Authorization').replace('Bearer ','');
        const token = req.cookies.token; // using httpOnly cookie
        // console.log(token);
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        // console.log(token);
        const user = await User.findOne({_id:decoded._id,"tokens.token":token},{_id:0})
    
        // console.log(user)
        if(!user){
            throw new Error()
        }
        req.token = token;
        req.user = user;
        next(); 
    }   
    catch(e){
        res.status(401).send({error:'please authenticate'})
    }
}
module.exports = auth;