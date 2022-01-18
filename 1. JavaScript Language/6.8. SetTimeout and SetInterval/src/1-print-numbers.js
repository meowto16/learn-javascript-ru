/**
 * Вывод каждую секунду (важность: 5)
 *
 * Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
 *
 * Сделайте два варианта решения.
 *
 * Используя setInterval.
 * Используя рекурсивный setTimeout.
 */

function printNumbersInterval(from, to) {
  let interval = setInterval(function () {
    alert(from)
    from++
    if (from > to) clearInterval(interval)
  }, 1000)
}

function printNumbersTimeout(from, to) {
  let timeout = setTimeout(function interval() {
    alert(from)
    from++
    if (from <= to) setTimeout(interval, 1000)
  }, 1000)
}
