// Net module
// Node.js net module is used to create both servers and clients. This module provides an asynchronous network wrapper and it can be imported using the following syntax.The Net module provides a way of creating TCP servers and TCP clients.

// var net = require("net")
var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});

server.listen(8080, function() { 
   console.log('server is listening');
});