/* globals describe, it */
'use strict'

var chai = require('chai')
chai.should()
chai.use(require('chai-interface'))

describe('fs', function () {
  var fs = require('../fs')

  it('interface', function () {

    fs.should.have.interface({
      // ftruncate: Function, - only in node 0.10.x
      // ftruncateSync: Function, - only in node 0.10.x
      appendFile: Function,
      appendFileSync: Function,
      chmod: Function,
      chmodSync: Function,
      chown: Function,
      chownSync: Function,
      close: Function,
      closeSync: Function,
      createReadStream: Function,
      createWriteStream: Function,
      exists: Function,
      existsSync: Function,
      fchmod: Function,
      fchmodSync: Function,
      fchown: Function,
      fchownSync: Function,
      fstat: Function,
      fstatSync: Function,
      fsync: Function,
      fsyncSync: Function,
      futimes: Function,
      futimesSync: Function,
      // lchmod: Function, - not avail on some platforms
      // lchmodSync: Function, - not avail on some platforms
      // lchown: Function, - not avail on some platforms
      // lchownSync: Function, - not avail on some platforms
      link: Function,
      linkSync: Function,
      lstat: Function,
      lstatSync: Function,
      mkdir: Function,
      mkdirSync: Function,
      open: Function,
      openSync: Function,
      read: Function,
      readdir: Function,
      readdirSync: Function,
      readFile: Function,
      readFileSync: Function,
      readlink: Function,
      readlinkSync: Function,
      readSync: Function,
      realpath: Function,
      realpathSync: Function,
      rename: Function,
      renameSync: Function,
      rmdir: Function,
      rmdirSync: Function,
      stat: Function,
      statSync: Function,
      symlink: Function,
      symlinkSync: Function,
      truncate: Function,
      truncateSync: Function,
      unlink: Function,
      unlinkSync: Function,
      unwatchFile: Function,
      utimes: Function,
      utimesSync: Function,
      watch: Function,
      watchFile: Function,
      write: Function,
      writeFile: Function,
      writeFileSync: Function,
      writeSync: Function
    })

  })
})
