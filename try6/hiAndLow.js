'use strict'

// 正解となる秘密の数字
const SECRET_NUMBER = Math.floor(Math.random() * 101)
let count = 0

const { Cli, Handler } = require('../clitool/cli')
new Cli(new Handler()).run('0-100で数字を当てて')

Handler.prototype.exe = function(args, fn) {
  const ANSWER = parseInt(args)

  count++

  if (ANSWER === SECRET_NUMBER) {
    console.log('正解！・・・' + count + '回目で当てました')
    fn('close')
  } else if (ANSWER < SECRET_NUMBER) {
    console.log('もっと上')
    fn('')
  } else {
    console.log('もっと下')
    fn('')
  }
}
