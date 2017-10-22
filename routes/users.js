// Requiring Dependencies
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// User login routes *****************************************************************
router.get('/login', (req, res) =>{
    res.render('users/login');
});

// User register route
router.get('/register', (req, res) =>{
    res.render('users/register');
});

module.exports = router;