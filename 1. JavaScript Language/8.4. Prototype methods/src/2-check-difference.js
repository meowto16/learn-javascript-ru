/**
 * Разница между вызовами (важность: 5)
 */

// Давайте создадим новый объект rabbit:
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// Все эти вызовы делают одно и тоже или нет?
rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

// Решение: не совсем.
// 1. Вызывается в контексте объекта, поэтому он поймет что такое this
// 2. Вызывается без контекста, поэтому выведет undefined. Т.е мы вызываем метод просто на прототипе.
// 3. Вызывается без контекста, поэтому выведет undefined. Т.е мы вызываем метод просто на прототипе.
// 4. Вызывается без контекста, поэтому выведет undefined. Т.е мы вызываем метод просто на прототипе.
