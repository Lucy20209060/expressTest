var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');

// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql);

router.get('/list', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        connection.query('select id,code,name from menu;', '', function(err, result) {
            res.json(Object.assign({
                data: result,
                ...dbConfig.SUCCESS
            }))
            // 释放连接  
            connection.release();  
        })
    })
});

module.exports = router;