/**
 * Функция pow(x,n) (важность: 4)
 *
 * Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
 */

// Решение:
function pow(x, n) {
  return x ** n
}

/**
 * Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
 */

/**
 * Решение:
 */
function askInteger(message) {
  let input
  do {
    input = prompt(message, '')
  } while (!Number.isInteger(+input) || +input < 1)

  return input
}

const x = askInteger('Введите целое число')
const n = askInteger('Введите степень, в которую необходимо возвести число')

alert(pow(x, n))
