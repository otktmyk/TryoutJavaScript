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

console.log(toUry(hash))

function toUry(hash) {
  for (const key in hash) {
    if (key === 'text') {
      hash[key] = hash[key].replace(/foo/g, 'uryyyy!!')
    } else {
      toUry(hash[key])
    }
  }

  // ハッシュの値をすべて出力できるようにJSON文字列に変換
  return JSON.stringify(hash, null, 2)
}
