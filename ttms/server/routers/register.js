/**
 * Created by weiqiujuan on 17-9-8.
 */
const express=require("express");
const router=express.Router();
const connection = require("../dbs/connection");
const userSql = require("../dbs/userSql");

router.post("/registerInfo",(req,res)=>{
    const name=req.body.userName;
    const password=req.body.userPassword;

    connection.query(userSql.registerSql,[name,password],function (err,result) {
        if(err) {reutrn ;}
        if(result.message != "&Records: 1 Duplicates: 0  Warnings: 0")
            return ;
        res.json({isSuccess:true})
    })
});