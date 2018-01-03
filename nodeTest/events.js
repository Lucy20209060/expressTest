const EventEmitter = require('events');

class Player extends EventEmitter {}

var player = new Player();

player.on('play',() => {
    console.log('正在播放')
})

player.emit('play')