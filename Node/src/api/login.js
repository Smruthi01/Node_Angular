const express = require('express');
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')
const router = express.Router();
router.post('/login',async(req,res)=>{
    const{email }=req.body;
    var password = req.body;
    upassword = toString(password)
    console.log(req.body);

    const ad_email ="admin.mystay@gmail.com";
    const ad_pwd = "Mystay2022"
    // if(email==ad_email&& password==ad_pwd){
    //     res.json("welcome admin")
    // }

    // else{
      
   

           
            // const user = await User.findAll({where:{email}});
            // console.log(user)
        
            // if (user[0].length !== 1) {
            //  // const error =  Error('A user with this email could not be found.');
             // error.statusCode = 401;
              //throw error;
             // console.log("err")
            //}
        
            //const storedUser = user[0][0];
        
           // const isEqual = await bcrypt.compare(password, storedUser);
        
            // if (!isEqual) {
            //   const error = new Error('Wrong password!');
            //   error.statusCode = 401;
            //   throw error;
            // }
            
 const userEmail= await User.findAll({where:{email},raw:true}).catch(
    (err)=>{
        console.log(err);
    }
       );
    
       console.log(res)
       console.log(userEmail)
              if(!userEmail)
    return res
    .status(404)
    .json({message:"Email or password does not match!"})

            const jwtToken =jwt.sign(
                {id:userEmail.id,email:userEmail.email},
                process.env.JWT_SECRET);
        
                res.json({message:"Json token",token:jwtToken})
            // if (err) 
            //     if (!err.statusCode) {
            //       err.statusCode = 500;
            //     }
                
              }
        
        
  

//const dbpassword = User.sequelize.query("SELECT password FROM users WHERE email LIKE ?",{email},{ type: sequelize.QueryTypes.SELECT })
// console.log(dbpassword)



    // const isEqual = await bcrypt.compare(givenPassword,dbpassword );
    //     console.log(isEqual)

    // if (userEmail.password!=password) {
  
    //     console.log("not equal")
    // }else if

//    if(==password){
//     return res
//     .status(404)
//     .json({message:"Email or password does not match!"})
//     }else{
      
//bcrypt

  

    

       
)

module.exports = router;