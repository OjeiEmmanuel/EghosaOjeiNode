// Querystring : 
// Query String provides methods to deal with query string. It can be used to convert query string into JSON object and vice-versa
var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
console.log(q.year);