/**
 * Created by weiqiujuan on 17-8-18.
 */
var mysql = require('mysql');
var express = require('express');
var connection = require('../connection.js');

var modSql = 'UPDATE edit SET edit = ?,title = ? WHERE Id = ?';
var modSqlParams = ['hahahahha', 'a', 1];
//改
connection.query(modSql, modSqlParams, function (err, result) {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();