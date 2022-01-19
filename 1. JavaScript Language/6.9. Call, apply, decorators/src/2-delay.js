/**
 * Задерживающий декоратор (важность: 5)
 *
 * Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
 */

function delay(func, ms) {
  function wrapper(...args) {
    setTimeout(func.bind(this, ...args), ms)
  }
  
  return wrapper
}
