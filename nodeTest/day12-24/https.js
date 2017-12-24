const https = require('https')

const options = {
    hostname:'api.douban.com',
    port:443,
    method:'GET',
    path:'/v2/movie/top250'
}

var responseData = ''
var request = https.request(options,(response) => {
    // console.log(response.statusCode)
    // console.log(response.headers)
    response.setEncoding('utf8')
    response.on('data',function(chunk){
        responseData += chunk
    })

    response.on('end',function(){
        JSON.parse(responseData).subjects.map((item) => {
            console.log(item.title)
        })
    })
})

request.on('error',(error) => {
    console.log(error)
})

request.end()