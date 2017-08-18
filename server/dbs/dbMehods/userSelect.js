/**
 * Created by weiqiujuan on 17-8-17.
 */

var mysql  = require('mysql');
var express = require('express');
var connection  =require('../connection.js');

connection.connect();

var  sql = 'SELECT * FROM edit';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();