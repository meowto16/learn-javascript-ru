/**
 * Проверка на пустоту
 *
 * Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
 * Должно работать так:
 */

function isEmpty(obj) {
  for (let prop in obj) {
    return false
  }
  return true
}

module.exports = isEmpty
