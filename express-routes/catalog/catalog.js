const express = require('express');
const router = express.Router();

const catalog = require('./catalogData.js');

router.get('/', (req,res) => { 
    res.json(catalog);
    console.log('Retreived Catalog'); 
});

module.exports = router;