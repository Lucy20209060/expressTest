// File System
// 得到文件与目录的信息     start 
// 创建一个目录            mkdir
// 创建文件并写入内容       writeFile appendFile
// 读取文件的内容          readFile
// 列出目录的东西          readdir 
// 重命名目录或文件        rename 
// 删除目录与文件          rmdir unlink
const fs = require('fs')

// 读取文件夹
fs.readdir('logs',(error,files) => {
    if(error){
        console.log(error)
    }else{
        console.log(files)
    }
})

// ['hello.js']