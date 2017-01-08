module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    
    router.get('/', function(req,res) {
        var message = req.query.m;
        res.render('pages/index', {
            message: message,
        });
    });

    return router;
})();