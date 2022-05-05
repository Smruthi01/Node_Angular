const express = require('express');
const passport = require('passport')
//const { router } = require('../../app')

const router = express.Router();

const Hotels = require('../models/hotels');
router.get('/allhotels',async(req,res)=>{
    const allhotel = await Hotels.findAll();
    res.json(allhotel);
});

module.exports = router;