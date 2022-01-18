/**
 * Сумма с произвольным количеством скобок (важность: 2)
 *
 * Напишите функцию sum, которая бы работала следующим образом:
 */

function sum(value) {
  let sum = 0
  
  const fn = function (value = 0) {
    sum += value
    return fn
  }
  
  fn[Symbol.toPrimitive] = function() {
    return sum
  }
  
  return fn(value)
}

module.exports = sum
