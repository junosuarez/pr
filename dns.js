var pr = require('./index')
var dns = require('dns')

module.exports = pr(dns, [
  ['lookup', 'address', 'family'], // => Promise<{address: String, family: Number}>
  'resolve', // => Promise<Array>
  'resolve4', // => Promise<Array>
  'resolve6', // => Promise<Array>
  'resolveMx', // => Promise<Array>
  'resolveTxt', // => Promise<Array>
  'resolveSrv', // => Promise<Array>
  'resolveNs', // => Promise<Array>
  'resolveCname', // => Promise<Array>
  'reverse' // => Promise<Array>
])
