const EventEmitter = require("events")

//Create class
class MyEmitter extends EventEmitter {}

//init Object
const myEmitter = new MyEmitter()

//Event Listener
myEmitter.on('event', () => console.log("event fired"))

//init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')