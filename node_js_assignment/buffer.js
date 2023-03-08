// Buffer module:
// The buffers module provides a way of handling streams of binary data, it helps convert the string "abc" into a stream of binary data:
// Example:
rbuf = Buffer.alloc(26); 
var j;
 
for (var i = 65, j = 0; i < 90, j < 26; i++, j++) { 
    rbuf[j] = i ; 
}
 
console.log( rbuf.toString('utf-8', 3, 9)); 
// this will output DEFGHI