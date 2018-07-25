'use strict'

const { Cli, Handler } = require('../clitool/cli')
new Cli(new Handler()).run('数値を入力してください')

const MULTIPLES_OF_THREE = 'Fizz'
const MULTIPLES_OF_FIVE = 'Buzz'

Handler.prototype.exe = function(args, fn) {
  const INPUT_NUMBER = args

  let outputString = ''
  for (let i = 1; i <= INPUT_NUMBER; i++) {
    if (i % 3 === 0) {
      outputString += MULTIPLES_OF_THREE
    }
    if (i % 5 === 0) {
      outputString += MULTIPLES_OF_FIVE
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      outputString += i
    }

    if (i < INPUT_NUMBER) {
      outputString += ','
    }
  }
  console.log(outputString)
  fn('close')
}
