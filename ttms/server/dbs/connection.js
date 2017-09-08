/**
 * Created by weiqiujuan on 17-8-17.
 */
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'ttms'
});

connection.connect((err) => {
    if (err) {
        console, log("err" + err.stack);
        return;
    }
    console.log("connection id" + connection.threadId);
});
module.exports = connection;
