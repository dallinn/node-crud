module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    
    router.route('/')
        .get(function (req, res) {
            var message = req.query.m;
            res.render('pages/index', {
                message: message,   
            });
        })
        .post(function (req, res) {
            res.send('post to /')
        })
        .put(function (req, res) {
            res.send('put to /')
        })
        .delete(function (req, res) {
            res.send('delete to /')
        });

    return router;
})();
