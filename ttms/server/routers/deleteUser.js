/**
 * Created by weiqiujuan on 17-9-8.
 */
const express = require('express');
const router = express.Router();
const connection = require('../dbs/connection');
const userSql = require('../dbs/userSql');

router.post("/deleteUser", (req, res) => {
    connection.query(userSql.delete, req.body.id, function (err) {
        if (err) return res.status(500).json({tip: err.message});
        res.json({tip: "success"});
    });
});

module.exports = router;