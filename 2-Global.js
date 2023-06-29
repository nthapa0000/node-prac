// // Global- No window!!

// we can access global variable anywhere in the file

// __dirname // path to current directory
// __filename // file name
// require // function to use modules (CommonJS)
// module // info about current module (file)
// process // info about env where the program is being executed(env = environment)
console.log(__dirname)//will give us the path
setInterval(()=>{
console.log('hello world')
},1000)
// ctrl c to close the terminal running process
// currently we are restarting the application by using node app.js or simply the file name latter we will us the npm 
