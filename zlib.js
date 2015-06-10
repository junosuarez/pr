var pr = require('./index')
var zlib = require('zlib')

module.exports = pr(zlib, [
  'deflate', // => Promise<Buffer>
  'deflateRaw', // => Promise<Buffer>
  'gzip', // => Promise<Buffer>
  'gunzip', // => Promise<Buffer>
  'inflate', // => Promise<Buffer>
  'inflateRaw', // => Promise<Buffer>
  'unzip' // => Promise<Buffer>
])
