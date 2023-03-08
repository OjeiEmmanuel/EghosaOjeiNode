// Readline Module
//  in Node.js allows the reading of input stream line by line. This module wraps up the process standard output and process standard input objects. Readline module makes it easier for input and reading the output given by the user. The Readline module comes with different methods to interact with the user.

// Syntax 

var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question('What is your age? ', (age) => {
console.log('Your age is: ' + age);
});

// Will output this:
// What is your age? 20
// Your age is: 20
