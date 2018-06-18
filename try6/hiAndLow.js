'use strict'

console.log('0-100で数字を当てて')

// 正解となる秘密の数字
const SECRET_NUMBER = Math.floor(Math.random() * 101)

let count = 0
while (true) {
  count++

  // nodeで実行するのにprompt使えないので、とりあえず入力されるべき回答は都度乱数から取得
  // const ANSWER = window.prompt('0から100までの数字を入力してください。')
  const ANSWER = Math.floor(Math.random() * 101)

  console.log(ANSWER)
  if (isEquals(ANSWER, SECRET_NUMBER)) {
    console.log('正解！・・・' + count + '回目で当てました')
    break
  }
}

function isEquals(inputNumber, secretNumber) {
  if (inputNumber === secretNumber) {
    return true
  }

  if (inputNumber < secretNumber) {
    console.log('もっと上')
  } else {
    console.log('もっと下')
  }
  return false
}
