
var path = require('path');

let myPath = path.resolve(__dirname, '/img/so');
let myPath2 = path.resolve(__dirname, './img/so');
let myPath3 = path.resolve('/foo/bar', './baz');
let myPath4 = path.resolve('/foo/bar', '/tmp/file/');
console.log(__dirname);
console.log(myPath);
console.log(myPath2);
console.log(myPath3);
console.log(myPath4);
