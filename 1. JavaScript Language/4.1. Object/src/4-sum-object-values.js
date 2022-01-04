/**
 * Сумма свойств объекта (важность: 5)
 *
 * У нас есть объект, в котором хранятся зарплаты нашей команды:
 * Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
 */

function getObjectValuesSum(obj) {
  let result = 0
  for (let key in obj) {
    const value = obj[key]
    if (typeof value === 'number') result += value
  }

  return result
}

module.exports = getObjectValuesSum
