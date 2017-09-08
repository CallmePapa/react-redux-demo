/**
 * Created by weiqiujuan on 17-9-8.
 */
const express = require("express");
const router = express.Router();
const connection = require("../dbs/connection");
const userSql = require("../dbs/userSql");

router.post("/userInfo", (req, res) => {
    var name = req.body.userName;
    var password = req.body.password;

    connection.query(userSql.logSql, [name, password], function (err, result) {
        if (err) return err;
        else {
            if (result.length === 0) {
                connection.query(userSql.findUser, name, function (err, resuly) {
                    console.log(result);
                    if (err)return err;
                    else if (result.length != 0) {
                        res.json({isSuccess: false, logInfo: "password is not correct"});
                    }
                    else {
                        res.json({isSuccess:false, logInfo: "user not exites"});
                    }
                })
            }
            else if (result[0].name === name && result[1].password === password) {
                res.json({isSuccess: true, logInfo: "success"});
            }
        }
    })
});

module.exports = router;