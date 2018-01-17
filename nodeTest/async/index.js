var async = require('async')

// 串行无关联
console.time('test')
// async.series([
//     function(callback){
//         setTimeout(function(){
//             callback(null,'one')
//         },1000)
//     },
//     function(callback){
//         setTimeout(function(){
//             callback(null,'two')
//         },2000)
//     }

// ],function(err,results){
//     console.log(results)
//     console.timeEnd('test')
// })

// async.series({
//     one:function(callback){
//         setTimeout(function(){
//             callback(null,'one')
//         },1000)
//     },
//     two:function(callback){
//         setTimeout(function(){
//             callback(null,'two')
//         },2000)
//     }

// },function(err,results){
//     console.log(results)
//     console.timeEnd('test')
// })

// 并行无关联
// async.parallel([
//     function(callback){
//         setTimeout(function(){
//             callback(null,'one')
//         },1000)
//     },
//     function(callback){
//         setTimeout(function(){
//             callback(null,'two')
//         },2000)
//     }
// ],function(err,results){
//     console.log(results)
//     console.timeEnd('test')
// })

// 串行有关联
async.waterfall([
    function(callback){
        callback(null,'one','two')
    },
    function(arr1,arr2,callback){
        callback(null,arr1,arr2,'three')
    },
    function(arr1,arr2,arr3,callback){
        callback(null,[arr1,arr2,arr3,'done'])
    }
],function(err,results){
    console.log(results)
    console.timeEnd('test')
})