var pr = require('./index')
var child_process = require('child_process')

module.exports = pr(child_process, [
  ['exec', 'stdout', 'stderr'], // => Promise<{stdout: Buffer, stderr: Buffer}>
  ['execFile', 'stdout', 'stderr'] // => Promise<{stdout: Buffer, stderr: Buffer}>
])
