// The VM module:
// enables compiling and running code within V8 Virtual Machine contexts
// Here is an example of  its implementation
var vm = require('vm');
var myObj = { name:'John', age:38};
vm.createContext(myObj);

vm.runInContext('age += 1;', myObj);
console.log(myObj);
// Will give {name;’john’,age:39} 
