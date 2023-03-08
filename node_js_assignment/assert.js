// Assert module:
// The assert module provides a way of testing expressions. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated. This module was built to be used internally by Node.

// Loading it:
// To load it, we do it as so
// var assert = require('assert');
var assert = require('assert');  
function mult(a, b) {  
  return a*b;  
}  
var expected = mult(9,2);  
assert( expected === 8, 'one plus two is three');
