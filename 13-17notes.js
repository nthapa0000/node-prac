// waiting for promise to resolve is much cleaner and better approach than using callback

const {readFile,writeFile} = require('fs').promises;
// const { get } = require('lodash');
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async()=>{
    try{
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile(
            './content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`,{flag:'a'});

        console.log(first,second);
    }
    catch(error){
        console.log(error);
    }
}
// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 // console.log(err)
//                 reject(err);
//                 // return;
//             }else{
//                 // console.log(data)
//                 resolve(data);
//             }
//         })
        
//     })
// }

start();
// getText('./content/first.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         // console.log(err)
//         return;
//     }else{
//         console.log(data)
//     }
// })
// waht if we want to read more than one file 




// // event loop allows Node.js to perform non-blocking I/O operations-despite the fact that JavaScript is single-threaded-by offloading operations to the system kernel whenever possible.

// // Javscript is synchronous and single threaded
// //  it means that js read line by line and execute line by line, will not execute next line until the current line is not executed even if the current line is taking time to execute
// // browser provide api to offload the task to the browser and when the task is completed it will put the task in the callback queue and then the event loop will put the task in the call stack and then the task will be executed

// // npm run dev to run the application

// // npm uninstall <packageName> to uninstall the package
// // Nuclear approach will uninstall whole node_modules 
// // delete the lock-json file and then delete the depencies from package.json file then do the npm install
// // now we will download nodemon globally so that we can use it in any project
// // sudo npm install -g nodemon in the terminal

// // Earlier we had to use the create-react-app globally but now we can use it by npx command
// // npx create-react-app <appName>



// // comments are not allowed in the package.json
// // dev dependency  using nodemon
// // we wont use nodemon in production to restart application , we will use like pm2 to restart application

// // in node modules folder all the dependencies are stored
// // if we dont have that folder npm create that folder and store all the dependencies in that folder
// //  if we download bootstrap dependecies then if it require some other dependencies it will also download that dependencies
// //  but in package.json file it will only show the dependencies that we have downloaded


// //  if we want to publish  the package the name of the package must be unique

// // npm - global command , comes with node
// // npm --version

// // local dependency - use it only in this particular project
// // npm i <packageName>
// // with arrival of npx need of globally installing packages is reduced

// // global dependency - use it in any project
// // npm install -g <packageName>
// // sudo npm install -g <packageName> (mac)

// // package.json - manifest file (stores important info about project/package)

// // manual approach (create package.json in the root, create properties etc)

// // npm init (step by step, press enter to skip)

// // npm init -y (everything default)

// const _ = require('lodash');
// // now we have access to lodash package 
// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items);
// // we have access to it because we have imported it

// console.log('hello FRANDS');
// // this methods is in lodash package
