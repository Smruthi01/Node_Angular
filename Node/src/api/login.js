const express = require('express');
const User = require('../models/user')
const jwt = require('jsonwebtoken')
//const bcrypt = require('bcryptjs');

const router = express.Router();
router.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    console.log(req.body);
    const userEmail = await User.findOne({where:{email}}).catch(
        (err)=>{
            console.log(err);
        }
           );
           console.log(res)

    if(!userEmail)
    return res
    .status(404)
    .json({message:"Email or password does not match!"})
    if(userEmail.password!==password)
    return res
    .status(404)
    .json({message:"Email or password does not match!"})
    
//bcrypt

    const jwtToken =jwt.sign(
        {id:userEmail.id,email:userEmail.email},
        process.env.JWT_SECRET);

        res.json({message:"Json token",token:jwtToken})

       
})

module.exports = router;