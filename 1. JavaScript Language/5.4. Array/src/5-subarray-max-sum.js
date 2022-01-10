/**
 * Подмассив наибольшей суммы (важность: 2)
 *
 * На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
 * Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
 * Функция getMaxSubSum(arr) должна возвращать эту сумму.
 *
 * Например:
 *
 * getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
 * getMaxSubSum([2, -1, 2, 3, -9]) = 6
 * getMaxSubSum([-1, 2, 3, -9, 11]) = 11
 * getMaxSubSum([-2, -1, 1, 2]) = 3
 * getMaxSubSum([100, -9, 2, -3, 5]) = 100
 * getMaxSubSum([1, 2, 3]) = 6 (берём все)
 *
 * Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
 *
 * getMaxSubSum([-1, -2, -3]) = 0
 *
 * Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
 */

function getMaxSubSum(arr) {
  let bestPossibleSum = 0
  let currentSum = 0

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    
    if (currentSum === 0 && num < 0) continue

    if (currentSum + num < 0) {
      currentSum = 0
      continue
    }
    
    currentSum += num
    bestPossibleSum = Math.max(bestPossibleSum, currentSum)
  }
  
  return bestPossibleSum
}

module.exports = getMaxSubSum
