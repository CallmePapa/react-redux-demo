/**
 * Created by weiqiujuan on 17-9-8.
 */
const express = require('express');
const router = express.Router();
const connection = require('../dbs/connection');
const userSql = require('../dbs/userSql');

router.get("/userList",(req,res)=>{
    connection.query(userSql.queryAll,(err,result)=>{
        if(err) return err;
        req.send(result);
    });
});
module.exports=router;
