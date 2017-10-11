//requiring express
const express = require('express');

//setting a variable to express 'app'
const app = express();

//Index route
app.get('/', (req, res) =>{
    res.send('index');
});

// About Route
app.get('/about', (req, res) =>{
    res.send('ABOUT');
});

//port that the server will be listening on
const port = 5000;

//
app.listen(port, () =>{
    console.log(`server started on port ${port}`)
});