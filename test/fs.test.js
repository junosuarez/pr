var chai = require('chai')
chai.should()
chai.use(require('chai-interface'))


describe('fs', function () {
  var fs = require('../fs')

  it('interface', function () {

  fs.should.have.interface({
    rename: Function,
    renameSync: Function,
    truncate: Function,
    truncateSync: Function,
    // ftruncate: Function, - only in node 0.10.x
    // ftruncateSync: Function, - only in node 0.10.x
    chown: Function,
    chownSync: Function,
    fchown: Function,
    fchownSync: Function,
    lchown: Function,
    lchownSync: Function,
    chmod: Function,
    chmodSync: Function,
    fchmod: Function,
    fchmodSync: Function,
    lchmod: Function,
    lchmodSync: Function,
    stat: Function,
    lstat: Function,
    fstat: Function,
    statSync: Function,
    lstatSync: Function,
    fstatSync: Function,
    link: Function,
    linkSync: Function,
    symlink: Function,
    symlinkSync: Function,
    readlink: Function,
    readlinkSync: Function,
    realpath: Function,
    realpathSync: Function,
    unlink: Function,
    unlinkSync: Function,
    rmdir: Function,
    rmdirSync: Function,
    mkdir: Function,
    mkdirSync: Function,
    readdir: Function,
    readdirSync: Function,
    close: Function,
    closeSync: Function,
    open: Function,
    openSync: Function,
    utimes: Function,
    utimesSync: Function,
    futimes: Function,
    futimesSync: Function,
    fsync: Function,
    fsyncSync: Function,
    write: Function,
    writeSync: Function,
    read: Function,
    readSync: Function,
    readFile: Function,
    readFileSync: Function,
    writeFile: Function,
    writeFileSync: Function,
    appendFile: Function,
    appendFileSync: Function,
    watchFile: Function,
    unwatchFile: Function,
    watch: Function,
    exists: Function,
    existsSync: Function,
    createReadStream: Function,
    createWriteStream: Function



  })

  })
})