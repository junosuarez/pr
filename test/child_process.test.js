/* globals describe, it */
'use strict'

var chai = require('chai')
chai.should()
chai.use(require('chai-interface'))

describe('child_process', function () {
  var child_process = require('../child_process')

  it('interface', function () {
    child_process.should.have.interface({
      fork: Function,
      exec: Function,
      execFile: Function,
      spawn: Function
    })
  })

  it('exec', function () {
    return child_process.exec('ls')
  })
})
