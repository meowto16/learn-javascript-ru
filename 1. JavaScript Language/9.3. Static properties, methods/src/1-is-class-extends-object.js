/**
 * Класс расширяет объект? (важность: 5)
 *
 * Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.
 * Пример:
 */

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true


// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):
class Rabbit extends Object {
  constructor(name) {
    super(name) // Решение: забыли добавить super
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // Ошибка

// И еще интересный момент
// class Rabbit ->
/**
 *
 * Rabbit.__proto__ === Function.prototype (class Rabbit)
 * Rabbit.__proto__ === Object (class Rabbit extends Object)
 */
