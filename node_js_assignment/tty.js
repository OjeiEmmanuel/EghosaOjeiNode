// tty: 
// This module provides utilities for working with terminal devices. Example: checking if a stream is a TTY:

const tty = require('tty');
console.log(tty.isatty(process.stdin));