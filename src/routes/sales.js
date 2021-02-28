const express = require('express');
const Sales = require('../models/Sales');
const router = express.Router();


router.post('/register', (req, res) => {
    res.send('register route ');
});

router.post('/login', (req,res) => {
    res.send('login route ');
});

module.exports = router;

