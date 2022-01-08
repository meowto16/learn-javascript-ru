/**
 * Сделать первый символ заглавным (важность: 5)
 *
 * Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
 */

function ucFirst(str) {
  return str.length > 1
    ? str[0].toUpperCase() + str.slice(1)
    : ''
}
