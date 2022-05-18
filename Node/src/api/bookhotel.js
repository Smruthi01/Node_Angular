const express = require('express');
const passport = require('passport')

const router = express.Router();

const Hotels = require('../models/hotels');
router.post('/book',async(req,res)=>{
    const {location,from,to,price}=req.body;

    const search =  await Hotels.findAll({where:{location}}).catch(
        (err) => {console.log("Error: ", err);}
  
      );
      res.json(search)
})

module.exports = router;