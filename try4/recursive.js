'use strict'

// nodeで実行するのにprompt使えないので、とりあえず入力値は定数で代用
// const INPUT_NUMBER = window.prompt('数字を入力してください。')
const INPUT_NUMBER = 5

console.log(summation(INPUT_NUMBER))

function summation(additionTarget) {
  if (additionTarget !== 0) {
    return additionTarget + summation(additionTarget - 1)
  } else {
    return 0
  }
}
