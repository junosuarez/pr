# pr
node builtins wrapped for promises

all of node's builtin apis as Promises/A+ - returning functions. Use the core module APIs you know without the impedence mismatch of adapting them to promises yourself.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## installation

    $ npm install pr

## usage

require any builtin module with `pr/` before it

## example

    var fs = require('pr/fs')

    fs.readdir(__dirname).then(function (files) {
      console.log(__dirname + ':\n' + files.join('\n'))
    })

## modules included

Methods taking one-time callbacks in the following module are wrapped with promise-returning versions:

  - [fs](http://nodejs.org/api/fs.html)
  - [child_process](http://nodejs.org/api/child_process.html)
  - [crypto](http://nodejs.org/api/crypto.html)
  - [dns](http://nodejs.org/api/dns.html)
  - [zlib](http://nodejs.org/api/zlib.html)  

Additionally, all base modules are available by `require('pr/name')` for convenience.

Functions which are documented as taking a callback, but which actually use the callback as an event listener rather than as a continuation, are not supported.

## not currently implemented

`(http|https).request` and `.get` both take callbacks but also have return values of streams. These will be supported in a future release of `pr`, and the returned object will support both the stream and promise interface.

`readline`'s `Interface#question` is not currently implemented.

We're interested in supporting the entire api! Please open a pull request to contribute.

## **api current as of node 0.8.x**

## contributors

jden <jason@denizac.org>

## license

Public Domain.

<a rel="license"
   href="http://creativecommons.org/publicdomain/zero/1.0/">
  <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
</a>

To the extent possible under law, Jason Denizac has waived all copyright and related or neighboring rights to pr. This work is published from: United States.
