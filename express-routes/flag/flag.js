const express = require('express');
const router = express.Router();

const flag = require('./flagData.js');

router.get('/', (req,res) => { 
    res.json(flag);
    console.log('Retreived Flag'); 
});

module.exports = router;