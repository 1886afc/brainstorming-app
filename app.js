//requiring dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');

//setting a variable to express 'app'
const app = express();

// Load Routes
const ideas = require('./routes/ideas');
const users = require('./routes/users');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connecting to mongoose
mongoose.connect('mongodb://localhost/brain', {
    useMongoClient: true
})
.then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Express-Session
app.use(session({
    secret: 'Arsenal',
    resave: true,
    saveUninitialized: true,
}));

// Connect-flash
app.use(flash());

//Global variables
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


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

// Use routes
app.use('/ideas', ideas);
app.use('/users', users);

//port that the server will be listening on******************************************
const port = 5000;

//
app.listen(port, () =>{
    console.log(`server started on port ${port}`)
});