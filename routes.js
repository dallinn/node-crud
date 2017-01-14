module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    var db = require('./db.js');
        db.connect(function(err) {
            if (err) {
                console.error('mysql error : ' + err.stack);
                return;
            }

            console.log('connected as id ' + db.threadId);
        });

    router.route('/')
        .get(function (req, res) {
            db.query('SELECT * FROM todo ORDER BY id DESC', function(err, result) {
                if(err){
                    throw err;
                } else {
                    res.render('pages/index', {todos: result});
                };
            });
        })
        .post(function (req, res) {
            db.query('INSERT INTO todo SET ?', {message: req.body.todo});
            res.redirect('back');
        })
        .put(function (req, res) {
            res.send('put to /')
        })
        .delete(function (req, res) {
            res.send('delete to /')
        });

    return router;
})();
