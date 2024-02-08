const logEvents=require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

//initalize object
const myEmitter = new MyEmitter();

// add listner for the log event

myEmitter.on('log',(msg)=> logEvents(msg));

setTimeout(()=>{
    myEmitter.emit('log','Log event emitted');

},2000);