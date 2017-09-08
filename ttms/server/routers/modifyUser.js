/**
 * Created by weiqiujuan on 17-9-8.
 */
const express = require('express');
const router = express.Router();
const connection = require("../dbs/connection");
const userSql = require("../dbs/userSql");

router.post("/updataUser", (req, res) => {
    connection.query(userSql.update, [req.body.name, res.body.role], function (err, result) {
        if (err) return res.status(500).json({tip: err.message});
        res.json({tip: "success"});
    });
});
module.exports = router;