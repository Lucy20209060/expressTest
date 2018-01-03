// File System
// 得到文件与目录的信息     start 
// 创建一个目录            mkdir
// 创建文件并写入内容       writeFile appendFile
// 读取文件的内容          readFile
// 列出目录的东西          readdir 
// 重命名目录或文件        rename 
// 删除目录与文件          rmdir unlink
const fs = require('fs')

// 删除 test文件夹
// test 
//     test1.js
//     test2.js
//     test3.js

// 循环删除子文件 再去删除空文件夹
fs.readdirSync('test').map((file) => {
    fs.unlink(`test/${file}`,(error) => {
        if(error){
            console.log(error)
        }else{
            console.log(`成功删除文件：${file}`)
        }
    })
})

// 只能删除空文件夹 有子文件不能删除
fs.rmdir('testtem',(error) => {
    if(error){
        console.log(error)
    }else{
        // console.log(data.toString())
        console.log('删除成功')
    }
})