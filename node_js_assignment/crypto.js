// Crypto module
// The Node. js crypto module provides cryptographic functions to help one  secure his Node. js app. It includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.crypto allows you to hash plain texts before storing them in the database. For this, you have a hash class that can create fixed length, deterministic, collision-resistant, and unidirectional hashes

// Example hashing a password:
const crypto = require('crypto');

const password = 'mysecretpassword';
const hash = crypto.createHash('sha256').update(password).digest('hex');
console.log(hash);