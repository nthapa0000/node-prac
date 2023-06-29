// when we install node we automatically also download the npm which is node package manager 
// it does three main things
// reuse our code in other projects
// use code written by other developers
// share our code with other developers
// npm project is hosted on npmjs.com
// createReact app is a package which is used to create react app is also in npm 
// there is no quality control in npm , anyone can upload anything 
//  if no. of download high more tested it is

// if you searching for some package search in the npmjs.com


// http module allow us to set up a web server 
// we will use abstraction on the top of http module

const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);
    // we wont get this object till we close the terminal and restart the server and then refresh the page
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        // it will show when we write the url localhost:5000/about
        res.end('Here is our short history');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Page is not Found</p>
    <a href="/">back Home</a>
    `)
    // 
    // res.write();
    // res.end(); 
})
// req object will give us url

// both req and res are objects , req represent the request from the client(incoming) and res represent the response from the server(it is what we send)

server.listen(5000)
// now we are not exiting from the file , since we have web server(which we want always up) , we are listening to the port 5000
// ports