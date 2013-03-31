# pr
node builtins wrapped for promises

all of node's builtin apis as Promises/A+ - returning functions. Use the core module APIs you know without the impedence mismatch of adapting them to promises yourself.

## example

    var fs = require('pr/fs')

    fs.readdir(__dirname).then(function (files) {
      console.log(__dirname + ':\n' + files.join('\n'))
    })

## modules included

  - [fs](http://nodejs.org/api/fs.html)
  - [child_process](http://nodejs.org/api/child_process.html)

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