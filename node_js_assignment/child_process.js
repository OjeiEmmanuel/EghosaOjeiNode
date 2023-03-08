// Child_process:
// The child_process module enables us to access Operating System functionalities by running any system command inside a child process

// Example 1:
// Executing a shell command:
const fs = require('fs');  
const child_process = require('child_process');  
for(var i=0; i<3; i++) {  
   var workerProcess = child_process.exec('node child_process2.js '+i,  
      function (error, stdout, stderr) {  
         if (error) {  
            console.log(error.stack);  
            console.log('Error code: '+error.code);  
            console.log('Signal received: '+error.signal);  
         }  
         console.log('stdout: ' + stdout);  
         console.log('stderr: ' + stderr);  
      });  
      workerProcess.on('exit', function (code) {  
      console.log('Child process exited with exit code '+code);  
   });  
}  
// 
// child_process.exec(command[, options], callback)  
// Parameters:

// 1) command: It specifies the command to run, with space-separated arguments.

// 2) options: It may contain one or more of the following options:

// cwd: It specifies the current working directory of the child process.
// env: It specifies environment key-value pairs.

