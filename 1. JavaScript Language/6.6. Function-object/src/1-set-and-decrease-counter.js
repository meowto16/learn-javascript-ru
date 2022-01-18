/**
 * Установка и уменьшение значения счётчика (важность: 5)
 *
 * Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
 *
 * counter() должен возвращать следующее значение (как и раньше).
 * counter.set(value) должен устанавливать счётчику значение value.
 * counter.decrease() должен уменьшать значение счётчика на 1.
 * Посмотрите код из песочницы с полным примером использования.
 *
 * P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
 */

function makeCounter() {
  let count = 0
  const performer = function counter() {
    return ++count
  }

  performer.set = function(value) {
    count = value
    return count
  }
  
  performer.decrease = function() {
    return --count
  }
  
  return performer
}

module.exports = makeCounter
