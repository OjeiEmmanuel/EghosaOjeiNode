// Cluster module: This module provides a way of creating child processes that runs simultaneously and share the same server port.


// Syntax
// var cluster = require('cluster');
var cluster = require('cluster');
if(cluster.isWorker) {
console.log('I am a worker');
}else{
console.log('I am a master');
cluster.fork();
cluster.fork();
}   
//  this will output I am a master, i am a worker , i am a worker