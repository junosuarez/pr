var Q = require('q')

var toArray = Array.prototype.slice.call

function wrap(fn) {
  return function () {
    var self = this
    var args = toArray(arguments)
    return Q.promise(function (resolve, reject) {

      fn.apply(this, args.concat(function (err, result) {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      }))

    })

  }
}

function clone (obj) {
  var o = {}
  for (var i in obj) {
    o[i] = obj[i]
  }
  return o
}

function wrapModule(mod, fns) {
  mod = clone(mod)
  fns.forEach(function (fn) {
    if (mod[fn]) {
      mod[fn] = wrap(mod[fn])
    }
  })
  return mod
}

module.exports = wrapModule
module.exports.wrap = wrap