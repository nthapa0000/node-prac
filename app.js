// in node modules folder all the dependencies are stored
// if we dont have that folder npm create that folder and store all the dependencies in that folder
//  if we download bootstrap dependecies then if it require some other dependencies it will also download that dependencies
//  but in package.json file it will only show the dependencies that we have downloaded


//  if we want to publish  the package the name of the package must be unique

// npm - global command , comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>
// with arrival of npx need of globally installing packages is reduced

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)

// manual approach (create package.json in the root, create properties etc)

// npm init (step by step, press enter to skip)

// npm init -y (everything default)

const _ = require('lodash');
// now we have access to lodash package 
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
// we have access to it because we have imported it
console.log(newItems);
// this methods is in lodash package
