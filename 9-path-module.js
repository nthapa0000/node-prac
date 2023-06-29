const path = require('path');
// passing the module path
console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
// inside the content folder we have the subfolder and inside the subfolder we have the test.txt file
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
// test.txt is the base

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// it will give the absolute path
// __dirname is the current directory name , here where the app.js file is located
console.log(absolute);

