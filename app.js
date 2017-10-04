//requiring express
const express = require('express');

//setting a variable to express 'app'
const app = express();

//Index route
app.get('/', (req, res) =>{

});

//port that the server will be listening on
const port = 5000;

//
app.listen(port, () =>{
    console.log(`server started on port ${port}`)
});