var express = require('express');
var app = express();
var ejs = require('ejs');

var routes = require('./routes.js'); 


app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(3000, function () {
    console.log('http://localhost:3000');
});
