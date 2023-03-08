// Zlib module  : Zlib module is used to provide compression and decompression (zip and unzip) functionalities. It is implemented using Gzip and deflate/inflate.

// The Zlib module is called like this:
// Const zlib = require(“zlib”)   

//  Here is an example of how it can be used to compress a file named text.
const zlib = require('zlib');
const gzip= zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('./test.txt');
const out=fs.createWriteStream('test.txt.gz');
inp.pipe(gzip).pipe(out)
// The above code will compress test.txt to test.txt.gz
console.log("Successfully converted text.txt into text.txt.gz")