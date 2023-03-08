// 13.Stream modules
// The Stream module is a native module that shipped by default in Node. Js                 
// The Stream module provides a way of handling streaming data.
// There are two types of streams: readable and writeable.
// An example of a readable stream is the response object you get when working with the http.createServer() method.
// An example of a writable stream is the request object you get when working with the http.createServer() method.

// Syntax 
// var stream = require('stream');// 

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('./input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");