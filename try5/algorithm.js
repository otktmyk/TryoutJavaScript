'use strict'

const SORT_TARGET = [20, 31, 42, 13, 5, 38]

// 合計と平均を、オリジナル配列から算出
const total = SORT_TARGET.reduce(function(previous, current, index, array) {
  return previous + current
})
console.log('合計:' + total)
console.log('平均:' + total / SORT_TARGET.length)

// 最大を、オリジナル配列から算出
const max = SORT_TARGET.reduce(function(previous, current, index, array) {
  if (previous > current) {
    return previous
  } else {
    return current
  }
})
console.log('最大:' + max)

// 最小を、オリジナル配列から算出
const min = SORT_TARGET.reduce(function(previous, current, index, array) {
  if (previous < current) {
    return previous
  } else {
    return current
  }
})
console.log('最小:' + min)

bubbleSortAsc(SORT_TARGET)
console.log('小さい順:' + SORT_TARGET)

quickSortDesc(SORT_TARGET, 0, SORT_TARGET.length - 1)
console.log('大きい順:' + SORT_TARGET)

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
function quickSortDesc(array, leftIndex, rightIndex) {
  let pivot = array[leftIndex]
  const LEFT_HOLD = leftIndex
  const RIGHT_HOLD = rightIndex
  while (leftIndex < rightIndex) {
    while (array[rightIndex] <= pivot && leftIndex < rightIndex) {
      rightIndex--
    }
    if (leftIndex !== rightIndex) {
      array[leftIndex] = array[rightIndex]
      leftIndex++
    }
    while (array[leftIndex] >= pivot && leftIndex < rightIndex) {
      leftIndex++
    }
    if (leftIndex !== rightIndex) {
      array[rightIndex] = array[leftIndex]
      rightIndex--
    }
  }
  array[leftIndex] = pivot
  pivot = leftIndex
  leftIndex = LEFT_HOLD
  rightIndex = RIGHT_HOLD
  if (leftIndex < pivot) {
    quickSortDesc(array, leftIndex, pivot - 1)
  }
  if (rightIndex > pivot) {
    quickSortDesc(array, pivot + 1, rightIndex)
  }
}
