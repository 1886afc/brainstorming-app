//requiring dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

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

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Index route
app.get('/', (req, res) =>{
    const title = 'Welcome'
    res.render('index',{
        title: title
    });
});

// About Route
app.get('/about', (req, res) =>{
    res.render('ABOUT');
});

//port that the server will be listening on
const port = 5000;

//
app.listen(port, () =>{
    console.log(`server started on port ${port}`)
});