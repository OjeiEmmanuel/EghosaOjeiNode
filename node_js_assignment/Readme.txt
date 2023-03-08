Modules are pieces of reusable codes
Modules help developers adhere to the DRY (Don't Repeat Yourself) principle in programming. It is expedient to also say that they also help to break down complex logic into small, simple, and manageable chunks.
There are three main types of  modules in Node.js. They are
1.Local modules
2.Third_party modules
3.Built_in Modules


Local modules :
These are modules which we build during the course of our projects.  To use it in another program,or files you need to provide the path of the file as an argument.  I.e the filepath where it was created will have to be supplied.
Say we have  created a module called sayHello in the same  folder as our current working file we can get it into our code using:
Const sayHello = require(“./sayHello”)

Third party modules:
These are modules created by other people. The node package manager (NPM) is necessary for one to use this type of modules.
To use a third-party package in your application, you first need to install it. You can run the command below to install a package.
Npm install <name-of-package> . To use the installed package, you need to load it with the require function.
eg npm install node.js_assignment
Const hello = require(“node.js_assignment”)
Console.log(hello.write(my_assignment))   
Built_in module:
This is the last major type of  modules in node.js. Just as the name suggest, they come with node.js. I.e, when node.js is installed, these modules can be used without any special work.
To use any of such modules, we simply use the following code
Const variable = require(“built_in module”) after which the variable will have the usable codes in “built_in module”.
The following are the built_in modules in node.js and a short description of what they do


Module	Description
assert	Provides a set of assertion tests
buffer	To handle binary data
child_process	To run a child process
cluster	To split a single Node process into multiple processes
crypto	To handle OpenSSL cryptographic functions
dgram	Provides implementation of UDP datagram sockets
dns	To do DNS lookups and name resolution functions
domain	Deprecated. To handle unhandled errors
events	To handle events
fs	To handle the file system
http	To make Node.js act as an HTTP server
https	To make Node.js act as an HTTPS server.
net	To create servers and clients
os	Provides information about the operation system
path	To handle file paths
punycode	Deprecated. A character encoding scheme
querystring	To handle URL query strings
readline	To handle readable streams one line at the time
stream	To handle streaming data
string_decoder	To decode buffer objects into strings
timers	To execute a function after a given number of milliseconds
tls	To implement TLS and SSL protocols
tty	Provides classes used by a text terminal
url	To parse URL strings
util	To access utility functions
v8	To access information about V8 (the JavaScript engine)
vm	To compile JavaScript code in a virtual machine
zlib	To compress or decompress files