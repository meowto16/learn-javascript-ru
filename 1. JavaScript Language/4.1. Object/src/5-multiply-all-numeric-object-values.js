/**
 * Умножаем все числовые свойства на 2 (важность: 3)
 *
 * Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
 */

function multiplyNumeric(obj) {
  const MULTIPLIER = 2

  for (let key in obj) {
    if (typeof obj[key] === 'number') obj[key] *= MULTIPLIER
  }
}

module.exports = multiplyNumeric
