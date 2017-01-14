var mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'node',
    password: 'NODE123', //temp password, unsafe
    database: 'nodecrud'
});

module.exports = connection;
