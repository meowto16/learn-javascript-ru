/**
 * Вычислить сумму чисел до данного (важность: 5)
 *
 * Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
 *
 * P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
 * P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
 */

// With loop
function sumToLoop(to) {
  let result = 0
  for (let i = 1; i <= to; i++) result += i
  return result
}

// With recursion
function sumToRecursive(to) {
  if (to <= 1) return to
  return to + sumToRecursive(to - 1)
}

// With Arithmetic progression
function sumToArithmetic(to) {
  return to * (to + 1) / 2
}

module.exports = {
  sumToLoop,
  sumToRecursive,
  sumToArithmetic
}

/**
 * Какой вариант самый быстрый - с арифметической прогрессией, затем с циклом, затем с рекурсией
 * Можно ли при помощи рекурсии посчитать sumTo(100000) - скорее всего переполнится стек вызовов и будет очень медленно.
 */
