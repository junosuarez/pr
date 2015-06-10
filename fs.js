var pr = require('./index')
var fs = require('fs')

module.exports = pr(fs, [
  'rename',
  'ftruncate',
  'truncate',
  'chown',
  'fchown',
  'lchown',
  'chmod',
  'fchmod',
  'lchmod',
  'stat', // => Promise<fs.Stats>
  'lstat', // => Promise<fs.Stats>
  'fstat', // => Promise<fs.Stats>
  'link',
  'symlink',
  'readlink', // => Promise<String>
  'realpath', // => Promise<String>
  'unlink',
  'rmdir',
  'mkdir',
  'readdir',
  'close',
  'open',
  'utimes',
  'futimes',
  'fsync',
  'write',
  'read',
  'readFile',
  'writeFile',
  'appendFile'
])
