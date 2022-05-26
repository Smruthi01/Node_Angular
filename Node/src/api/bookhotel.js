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


 //from the hotels list
router.post('/list',async(req,res)=>{
  const id = req.body.id;

  const fetch = await Hotels.findOne(({where:{id:id}}))
  .catch(
    (err) => {console.log("Error: ", err);}

  );
  res.json(fetch)
  
})

router.post('/hotelbook/name=?',async(req,res)=>{
  
  const from = req.body.from;
  const to = req.body.to;
  const name = req.body.name;
  var room = req.body.room;
  var days = req.body.days;
  
  const id = req.body.id;
  var bill =0;
  var price = 0;
  const bookeduser = req.body.user;
  console.log(days)
var fourprice=0  ; 
  

})
    



module.exports = router;