'use strict'

const SORT_TARGET = [20, 31, 42, 13, 5, 38]

const { Cli, Handler } = require('../clitool/cli')
new Cli(new Handler()).run('please Enter.')

Handler.prototype.exe = function(args, fn) {
  // 合計と平均を、オリジナル配列から算出
  const total = SORT_TARGET.reduce(function(previous, current) {
    return previous + current
  })
  console.log('合計:' + total)
  console.log('平均:' + total / SORT_TARGET.length)

  // 最大を、オリジナル配列から算出
  const max = SORT_TARGET.reduce(function(previous, current) {
    if (previous > current) {
      return previous
    } else {
      return current
    }
  })
  console.log('最大:' + max)

  // 最小を、オリジナル配列から算出
  const min = SORT_TARGET.reduce(function(previous, current) {
    if (previous < current) {
      return previous
    } else {
      return current
    }
  })
  console.log('最小:' + min)

  bubbleSortAsc(SORT_TARGET)
  console.log('小さい順:' + SORT_TARGET)
  console.log('大きい順:' + quickSortDesc(SORT_TARGET))
  fn('close')
}

// バブルソートで昇順に並び替え
function bubbleSortAsc(array) {
  for (let i = 0; i < SORT_TARGET.length - 1; i++) {
    for (let j = SORT_TARGET.length - 1; j > i; j--) {
      if (SORT_TARGET[j] < SORT_TARGET[j - 1]) {
        const temp = SORT_TARGET[j - 1]
        SORT_TARGET[j - 1] = SORT_TARGET[j]
        SORT_TARGET[j] = temp
      }
    }
  }
}

// クイックソートで降順に並び替え
function quickSortDesc(array) {
  if (array.length < 1) {
    return array
  }
  const pivot = array[0]
  let left = []
  let right = []

  // 配列の先頭をピボットに指定したためループは配列先頭を除く
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  left = quickSortDesc(left)
  right = quickSortDesc(right)

  return left.concat(pivot).concat(right)
}
