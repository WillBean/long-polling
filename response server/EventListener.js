/**
 * Created by Will Bean on 2017/3/7.
 * 
 * 事件监听方法类
 * 
 */
const EventEmitter = require('events').EventEmitter;

function EventListener() {
    this.status = "";
    this.sendEnsureMsg = function () {
        this.emit('ensure')
    }
    this.receiveEnsureMsg = function (data) {
        this.status = data
        this.emit('receive')
    }
}

EventListener.prototype = new EventEmitter();
EventListener.prototype.constructor = EventListener;

module.exports = EventListener;