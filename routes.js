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
            db.query('SELECT * FROM todo WHERE completed=0 ORDER BY id DESC; SELECT * from todo WHERE completed=1 ORDER BY id DESC', function(err, results) {
                if(err){
                    throw err;
                } else {
                    res.render('pages/index', {todos: results[0], completedTodos: results[1]});
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
            db.query('UPDATE todo SET completed=1 where ?', {id: req.query.id}), function(err){
                if (err) {
                    throw err;
                } else {
                    res.send(req.query.id);
                }
            };
            res.redirect('back');
        });

    return router;
})();
