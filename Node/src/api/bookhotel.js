const express = require('express');
const passport = require('passport')

const router = express.Router();

const Hotels = require('../models/hotels');
router.post('/book',async(req,res)=>{
  const location = req.body.location;
  const speciality = req.body.speciality;
  const from = req.body.from;
  const to = req.body.to;
const rooms = req.body.rooms;

if (speciality=="all"){
  const all_search = await Hotels.findAll({where:{location:location}})
  .catch((err)=>{console.log("Error: ",err)})
  res.json(all_search)
   console.log("all")
   }
  else{
     const search =  await Hotels.findAll({where:[{location : location , speciality:speciality }]})
   
     .catch(
         (err) => {console.log("Error: ", err);}
   
       );
       res.json(search)
 }
 
 })
module.exports = router;