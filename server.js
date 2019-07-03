
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3001;

app.get('/', function (req,res) {
    res.send('hello joe')
})

app.listen( PORT, function () {
    console.log('listening on ' + PORT)
})