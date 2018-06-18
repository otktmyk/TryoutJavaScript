'use strict'

const MULTIPLES_OF_THREE = 'Fizz'
const MULTIPLES_OF_FIVE = 'Buzz'

// nodeで実行するのにprompt使えないので、とりあえず入力値は定数で代用
// const INPUT_NUMBER = window.prompt('数字を入力してください。')
const INPUT_NUMBER = 18

for (let i = 1; i <= INPUT_NUMBER; i++) {
  let outputString = ''

  if (i % 3 === 0) {
    outputString += MULTIPLES_OF_THREE
  }
  if (i % 5 === 0) {
    outputString += MULTIPLES_OF_FIVE
  }
  if (outputString === '') {
    outputString += i
  }

  console.log(outputString)
}
