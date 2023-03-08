// http: 
// This module provides functionality for creating HTTP servers and clients. 

// Example: creating an HTTP server:


const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});