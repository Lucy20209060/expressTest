// File System
// 得到文件与目录的信息     start 
// 创建一个目录            mkdir
// 创建文件并写入内容       writeFile appendFile
// 读取文件的内容          readFile
// 列出目录的东西          readdir 
// 重命名目录或文件        rename 
// 删除目录与文件          rmdir unlink
const fs = require('fs')

// 写入内容
fs.writeFile('logs/hello.js','\/\/文件写入和追加内容 ~ \nconsole.log(`文件写入成功...`)\n',(error) => {
    if(error){
        console.log(error)
    }else{
        console.log('成功写入文件')
    }
})
// 追加内容
fs.appendFile('logs/hello.js','console.log(`成功追加内容...`)\n',(error) => {
    if(error){
        console.log(error)
    }else{
        console.log('成功追加内容')
    }
})