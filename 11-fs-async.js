// later we will see async and await approach


// note the way in which we console.log in the sync and async approach

const {readFile,writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{

const first = result;
readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
// console.log(result)

// callback function
const second = result;
writeFile('./content/result-async.txt',`Here is the result : ${first},${second}`,
{flag:'a'},(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('done with this task');
    // console.log(result)})
})
}) 
// it will create result async(non blocking approach)
console.log('starting the next task')

// Output:
// start
// starting the next task
// done with this task
// and hence allowing the next user to access it 