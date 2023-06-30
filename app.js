// event are core building block of node 
const EventEmitter = require('events');
const customEmitter = new EventEmitter();
// on listen for an event , emit will emit the event 
customEmitter.on('response', (name, id) => {
console.log(`data recieved ${name} with id:$}{id}`);
})
customEmitter.on('response', () => {
console.log(`lol its same , we can emit our event we can have as many fucntion`);
})

// order matters we have to listen first then emit an event 
// on event we pass string and call back fucntion 

customEmitter.emit('response','john',34)