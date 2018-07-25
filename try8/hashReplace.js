'use strict'

// 置換対象のハッシュ
const hash = {
  main: {
    first: { text: 'foobar' },
    second: { text: 'fizzbuzz', child: { text: 'foobar' } },
  },
  sub: {
    first: { text: 'fizzbuzz', child: { text: 'foobar' } },
    second: {
      third: { text: 'barfoo', child: { text: 'foobar' } },
      forth: { child: { text: 'jit_foo_foo' } },
    },
  },
  text: 'foofava',
}

const { Cli, Handler } = require('../clitool/cli')
new Cli(new Handler()).run('please Enter.')

Handler.prototype.exe = function(args, fn) {
  console.dir(toUry(hash), { depth: null })
  fn('close')
}

function toUry(hash) {
  for (const key in hash) {
    if (key === 'text') {
      hash[key] = hash[key].replace(/foo/g, 'uryyyy!!')
    } else {
      toUry(hash[key])
    }
  }

  return hash
}
