const express = require('express');
const router = express.Router();

const praducts = require('./praductsData.js');

router.get('/', (req,res) => { 
    res.json(praducts);
    console.log('Retreived Praducts'); 
});

module.exports = router;