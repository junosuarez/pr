var pr = require('./index')
var crypto = require('crypto')

module.exports = pr(crypto, [
  'pbkdf2', // => Promise<String>
  'randomBytes', // => Promise<Buffer>
  'pseudoRandomBytes' // => Promise<Buffer>
])
