const express = require('express');
const router = express.Router();

router.post('/api/email', (req,res) => {
    try {
        const response = {
            errors: false, 
            message: 'Email Sent',
            postedData: req.body,
        }
        console.log('Post Sent Email');
        res.json(response);
    } catch (err) {res.status(400).json({ error: err.message})}
});

module.exports = router;