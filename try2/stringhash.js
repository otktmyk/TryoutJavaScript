'use strict'

// nodeで実行するのにprompt使えないので、とりあえず入力値は定数で代用
// const INPUT_WORDS = window.prompt('文字列を入力してください。')
const INPUT_WORDS = 'no js no life'

const INPUT_ARRAY = INPUT_WORDS.split(' ')
const WORD_HASH = new Array(0)

INPUT_ARRAY.forEach(function(value) {
  if (value in WORD_HASH === false) {
    WORD_HASH[value] = 0
  }
  WORD_HASH[value] = parseInt(WORD_HASH[value]) + 1
})

console.log(WORD_HASH)
