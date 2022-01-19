/**
 * Декоратор-шпион (важность: 5)
 *
 * Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
 * Каждый вызов должен сохраняться как массив аргументов.
 * Например:
 */

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push([...args])
    return func.apply(this, arguments)
  }
  
  wrapper.calls = []
  
  return wrapper
}

module.exports = spy
