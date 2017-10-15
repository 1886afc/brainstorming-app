//requiring dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//setting a variable to express 'app'
const app = express();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connecting to mongoose
mongoose.connect('mongodb://localhost/brain', {
    useMongoClient: true
})
.then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//Load idea Model
require('./models/Idea');
const Idea = mongoose.model('ideas');

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Index route*********************************************************************
app.get('/', (req, res) =>{
    const title = 'Welcome';
    res.render('index',{
        title: title
    });
});

// About Route
app.get('/about', (req, res) =>{
    res.render('ABOUT');
});

// Idea Index page
app.get('/ideas', (req, res) => {
    res.render('ideas/index');
});

//Add Idea Form
app.get('/ideas/add', (req, res) =>{
    res.render('ideas/add');
});

// Process form
app.post('/ideas', (req, res)=>{

    // validation
    let errors = [];
    if(!req.body.title){
        errors.push({text:'Please add a title'});
    }
    if(!req.body.details){
        errors.push({text:'Please add details'});
    }

    if(errors.length > 0){
        res.render('ideas/add', {
            errors: errors,
            title: req.body.title,
            detail: req.body.details
        });
    }else {
        const newUser = {
            title: req.body.title,
            details: req.body.details
        };
        new Idea(newUser)
            .save()
            .then(idea => {
                res.redirect('/ideas');
            })

    }
});

//port that the server will be listening on******************************************
const port = 5000;

//
app.listen(port, () =>{
    console.log(`server started on port ${port}`)
});