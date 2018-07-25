'use strict'

const ROCK_PAPER_SCISSOR = ['グー', 'チョキ', 'パー']
console.log('「じゃんけん・・・」')

const { Cli, Handler } = require('../clitool/cli')
new Cli(new Handler()).run('> 0.グー 1.チョキ 2.パー')

Handler.prototype.exe = function(args, fn) {
  const YOUR_HAND = args

  console.log('「ぽい」')
  const COMPUTER_HAND = Math.floor(Math.random() * ROCK_PAPER_SCISSOR.length)

  console.log('*コンピューター:' + ROCK_PAPER_SCISSOR[COMPUTER_HAND])
  console.log('*あなた:' + ROCK_PAPER_SCISSOR[YOUR_HAND])

  const JUDGEMENT = (YOUR_HAND - COMPUTER_HAND + 3) % 3
  switch (JUDGEMENT) {
    case 0:
      console.log('「アイコでしょ！」')
      fn('')
      break
    case 1:
      console.log('「コンピューターの勝ち!」')
      fn('close')
      break
    case 2:
      console.log('「あなたの勝ち!」')
      fn('close')
      break
  }
}
