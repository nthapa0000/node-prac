// name of module of file system is fs 
// asynchornsoly or synchornosly (blocking and non blocking)

// const {readFileSync} = require('fs');
// // synchronous one
// const fs = require('fs');

const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
// utf8 is encoding format tell node how to decode the file/read the file
const second = readFileSync('./content/second.txt','utf8');
// synchronous approach
console.log(first,second);


// if this take lot of time and js is reading code synchronously hence it will block the code and will block the other users 
writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`,{flag:'a'});
// if there is another file with same name it will overwrite the file
// first is the file name and second is the content of the file

console.log('done with this task');
console.log('starting the next one');
