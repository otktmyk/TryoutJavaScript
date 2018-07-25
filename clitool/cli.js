/**
 * node.jsを使った対話側のコマンドラインツール
 * 入出力はreadlineを利用する
 */

const readline = require('readline')

function Cli(handler) {
  this.handler = handler
}
exports.Cli = Cli

Cli.prototype.run = function(message) {
  const self = this
  const rli = readline.createInterface(process.stdin, process.stdout)
  rli.setPrompt('> ')
  console.log(message)

  // 文字入力で発生するイベント
  rli
    .on('line', function(line) {
      self.handler.exe.call(rli, line, function(res) {
        if (res === 'close') {
          process.stdin.destroy()
        } else {
          rli.prompt()
        }
      })
    })
    .on('close', function() {
      console.log('close')
      process.stdin.destroy()
    })
  rli.prompt()
}

function Handler() {}
exports.Handler = Handler
