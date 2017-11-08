// requiring dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create Schema
const UsersSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

//creating a model
mongoose.model('users', UsersSchema);