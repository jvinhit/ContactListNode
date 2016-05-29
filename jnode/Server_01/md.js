var fs = require("fs");

var email = "jvinhit@gmail.com";
console.log("Bắt đầu dựng server bằng nodejs");
var buffer = new Buffer('hello', 'utf-8');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
// doc file 

var noidung =fs.readFileSync(__dirname+'/data.txt');
console.log(noidung.toJSON());
module.exports = email;