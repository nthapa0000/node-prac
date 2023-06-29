//node uses common js ,every file is a module by default
// Modules - Encapsulated Code (only share minimum) only sharing what we want

// every file in node is module

// Modules
// when you import module you actually invoke it 
// when node exports it it wrap it in a fucntion

const names = require('./4-names');
const sayHi = require('./5-utils');
// console.log(names);
const data = require('./6-alternative');
// we are accesing items and single person
require('./7-mind-grenade');

// sayHi('Nishu');
// sayHi(names.john);
// sayHi(names.peter);   // Hello there Peter
// slowly the code will get bigger and will be annoying

// Build in Modules
// -> OS
// -> PATH 
// -> FS 
// -> HTTP: to set up our http server 