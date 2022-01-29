/**
 * Добавить функциям метод "f.defer(ms)" (важность: 5)
 *
 * Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
 * После этого должен работать такой код:
 */

Function.prototype.defer = function(ms) {
  setTimeout(this, ms)
}

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
