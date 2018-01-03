const EventEmitter = require('events');

class Player extends EventEmitter {}

var player = new Player();

player.on('play',(par) => {
    console.log(`正在播放-${par}...`)
})

// 对此触发 emit 多次调用play函数
player.emit('play','父亲写的的散文诗')
player.emit('play','天空之城')