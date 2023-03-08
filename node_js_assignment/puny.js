// Punycode    
// is a character encoding scheme defined by RFC 3492 that is primarily intended for use in Internationalized Domain Names. Because host names in URLs are limited to ASCII characters only, Domain Names that contain non-ASCII characters must be converted into ASCII using the Punycode scheme.Punycode is a special encoding syntax that is specifically used to convert Unicode characters (UTF-8) to ASCII, which is nothing but the restricted string character set. Why the conversion is needed is because The hostnames will understand only ASCII characters. Punycode is used by the International Domain Names(IDN) in order to encode/decode the URL which has been typed in the browser. 
// For example: If you search mañana.com in the browser, your browser which has an inbuilt IDNA service convert that to xn--maana-pta.com with the help of Punycode converter embedded in the browser.

// Syntax
// const punycode = require('punycode');

// Example
// Include punycode module
const punycode = require('punycode');
// Decode punycode strings of  ASCIL
// to unicode symbols
console.log(punycode.decode('manamapta'));
// Will output ‘maanama’
