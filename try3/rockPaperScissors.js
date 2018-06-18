'use strict'

const ROCK_PAPER_SCISSOR = ['グー', 'チョキ', 'パー']
console.log('「じゃんけん・・・」')
console.log('> 0.グー 1.チョキ 2.パー')

// nodeで実行するのにprompt使えないので、とりあえず入力値は定数で代用
// const YOUR_HAND = window.prompt('あなたの手を入力してください。')
const YOUR_HAND = Math.floor(Math.random() * ROCK_PAPER_SCISSOR.length)

console.log(YOUR_HAND)
console.log('「ぽい」')
const COMPUTER_HAND = Math.floor(Math.random() * ROCK_PAPER_SCISSOR.length)

console.log('*コンピューター:' + ROCK_PAPER_SCISSOR[COMPUTER_HAND])
console.log('*あなた:' + ROCK_PAPER_SCISSOR[YOUR_HAND])

const JUDGEMENT = (YOUR_HAND - COMPUTER_HAND + 3) % 3
switch (JUDGEMENT) {
  case 0:
    console.log('「アイコでしょ！」')
    break
  case 1:
    console.log('「コンピューターの勝ち!」')
    break
  case 2:
    console.log('「あなたの勝ち!」')
    break
}
