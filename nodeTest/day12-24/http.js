// 抓取页面中的内容
var http = require('http')
var https = require('https')
var cheerio = require('cheerio')
var url = 'http://www.hzanchu.com/'

console.log(cheerio.version)

http.get(url,function(res){
    var html = ''
    res.on('data',function(data){
        html += data
    })

    res.on('end',function(){
        // console.log(html)
        filterHtml(html)
    })

    res.on('error',function(err){
        // console.log(err)
    })
    // console.log(res)
})

// 获取页面导航
function filterHtml(html){
    var $ = cheerio.load(html)
    var nav = $('.classifywrap ul li')
    var arr = []
    nav.each(function(index,value){
        var navTitle = $(value).find('p').text()
        arr.push(index+navTitle)
    })
    console.log(arr)
}