var wrapModule = require('./wrapModule')
var child_process = require('child_process')

module.exports = wrapModule(child_process, [
  ['exec', 'stdout', 'stderr'], // => Promise<{stdout: Buffer, stderr: Buffer}>
  ['execFile', 'stdout','stderr'] // => Promise<{stdout: Buffer, stderr: Buffer}>
])