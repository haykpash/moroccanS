const express = require('express');
const router = express.Router();

const icons = require('./iconsData.js');

router.get('/', (req,res) => { 
    res.json(icons);
    console.log('Retreived Icons'); 
});

module.exports = router;