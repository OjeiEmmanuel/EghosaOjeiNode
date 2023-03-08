// dns: 
// This module provides a way to perform DNS lookups. 

// Example: resolving a domain name to an IP address:

const dns = require('dns');

dns.lookup('www.nairaland.com', (err, address, family) => {
  console.log(`address: ${address}, family: ${family}`);
});
