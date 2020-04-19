const express = require('express');
const router = express.Router();

const praducts = require('./praductsData.js');

router.get('/photos', (req,res) => { 
    res.json(praducts.photos);
    console.log('Retreived Praducts'); 
});

module.exports = router;