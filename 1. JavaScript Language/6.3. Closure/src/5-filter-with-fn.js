/**
 * Фильтрация с помощью функции (важность: 5)
 *
 * У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
 *
 * Сделайте набор «готовых к употреблению» фильтров:
 *
 * inBetween(a, b) – между a и b (включительно).
 * inArray([...]) – находится в данном массиве.
 * Они должны использоваться таким образом:
 *
 * arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
 * arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
 * Например:
 */

function inBetween(from, to) {
  return function(element) {
    return +element >= from && +element <= to
  }
}

function inArray(arr) {
  return function(element) {
    return arr.includes(element)
  }
}

module.exports = { inBetween, inArray }
