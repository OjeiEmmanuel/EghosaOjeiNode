// V8 module
// The Node.js V8 module represents interfaces and event specific to the version of V8. It provides methods to get information about heap memory through v8.getHeapStatistics() and v8.getHeapSpaceStatistics() methods.

// Example
const v8 = require('v8');
console.log(v8.getHeapStatistics());