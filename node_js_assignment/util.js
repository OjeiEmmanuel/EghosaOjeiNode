// UTIL module
// The Util module provides access to some utility functions.

// Example
var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt,'Linus', 6);

console.log(result);
// Will output “ Congratulate Linus on his 6th birthday”