var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
var isPositiveInteger = require('../utils/isPositiveInteger')


// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );

router.get('/list', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        const sql = 'select * from product';

        connection.query(sql, function(err, result) {
            res.json(Object.assign({
                data: result,
                ...dbConfig.SUCCESS
            }))
            // 释放连接  
            connection.release();  
        })
    })
});

router.get('/detail/:id', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        const id = req.params.id;
        const sql = `select * from productDetail where productId=${id}`;

        // id格式校验
        if(!isPositiveInteger(id)){
            res.json(Object.assign({
                data: null,
                ...dbConfig.ERROR,
                msg: '商品id格式错误'
            }))
            return
        }
        connection.query(sql, function(err, result) {
            if(result.length === 0){
                res.json(Object.assign({
                    data: null,
                    ...dbConfig.ERROR,
                    msg: '商品id错误'
                }))
            }else{
                res.json(Object.assign({
                    data: result[0],
                    ...dbConfig.SUCCESS
                }))
            }
            // 释放连接  
            connection.release();  
        })
    })
});

module.exports = router;