/**
 * Created by weiqiujuan on 17-8-18.
 */
var mysql  = require('mysql');
var express=require('express');

var connection  =require('../connection.js');

var  addSql = 'INSERT INTO edit(id,title,edit) VALUES(?,?,?)';
var  addSqlParams = ['1','c','test4'];
//增
connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();