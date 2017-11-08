const LocalStrategy = require('passport-local')
    .Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load user model
const user = mongoose.model('users');

module.exports = function(passport){

};