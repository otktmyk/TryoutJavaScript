'use strict'
// 4桁数字の種となる数配列
const SEED_NUMBER = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// 正解となる秘密の数字
const SECRET_NUMBER = [...Array(4)].map(function(value) {
  return getNumber(SEED_NUMBER)
})
let count = 0

const { Cli, Handler } = require('../clitool/cli')
new Cli(new Handler()).run('4桁の数字は？')

Handler.prototype.exe = function(args, fn) {
  const ANSWER = args.split('')
  count++

  if (judgement(ANSWER, SECRET_NUMBER)) {
    console.log(count + '回で正解！')
    fn('close')
  } else {
    fn('')
  }
}

function getNumber(array) {
  const INDEX = Math.floor(Math.random() * array.length)
  const resultNumber = array[INDEX]

  // 種は１要素につき１回しか使えないので、使用済みの種は削除する
  array.splice(INDEX, 1)
  return resultNumber
}

function judgement(inputNumber, secretNumber) {
  let hits = 0
  let blow = 0
  inputNumber.forEach(function(value, index) {
    if (value === secretNumber[index]) {
      hits++
    } else if (secretNumber.includes(value)) {
      blow++
    }
  })

  if (hits === 4) {
    return true
  } else {
    console.log('外れ:' + hits + 'Hits, ' + blow + 'Blow')
    return false
  }
}
