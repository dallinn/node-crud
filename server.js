var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', function (req,res) {
    res.render('pages/index');
});

app.listen(3000, function () {
    console.log('server up at localhost:3000');
});
