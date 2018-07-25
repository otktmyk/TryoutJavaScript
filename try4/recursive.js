'use strict'

const { Cli, Handler } = require('../clitool/cli')
new Cli(new Handler()).run('数値を入力してください')

Handler.prototype.exe = function(args, fn) {
  const INPUT_NUMBER = parseInt(args)

  console.log(summation(INPUT_NUMBER))

  function summation(additionTarget) {
    if (additionTarget === 0) {
      return 0
    } else {
      return additionTarget + summation(additionTarget - 1)
    }
  }
  fn('close')
}
