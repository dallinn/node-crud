var express = require('express');
var methodOverride = require('method-override');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var routes = require('./routes.js'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use('/', routes);

app.listen(3000, function () {
    console.log('http://localhost:3000');
});
