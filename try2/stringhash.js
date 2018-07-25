'use strict'

const { Cli, Handler } = require('../clitool/cli')
new Cli(new Handler()).run('文字列を入力してください。')

Handler.prototype.exe = function(args, fn) {
  const INPUT_WORDS = args

  const INPUT_ARRAY = INPUT_WORDS.split(' ')
  const WORD_HASH = {}

  INPUT_ARRAY.forEach(function(value) {
    if (!(value in WORD_HASH)) {
      WORD_HASH[value] = 0
    }
    WORD_HASH[value]++
  })

  console.log(WORD_HASH)
  fn('close')
}
