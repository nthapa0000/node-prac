// Stream : read or write sequentially
// Writeable: write data sequentially
// Readable : read data sequentially
//  Duplex : read and write data sequentially
//  Transform : where data can be modified while readign and writing 
// we can use event like data

const {createReadStream} = require('fs');
const stream = createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'});

// highWaterMark control the buffer size
// default size is 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'});
// const stream = createReadStream('./content/big.txt',{encoding:'utf8'});

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>console.log(err));
// test it by passsing the wrong path