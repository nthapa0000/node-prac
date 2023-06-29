// OS modules
const os = require('os');
// if we want specific one we can destructure it 
// passing name of the module, it is build in module , but when we use external module we have to install it

// info about the current user 
const user = os.userInfo();
console.log(user);
//  methods returns the system uptime in seconds 

// method return the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);
// os is the variable name and method name is uptime
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);