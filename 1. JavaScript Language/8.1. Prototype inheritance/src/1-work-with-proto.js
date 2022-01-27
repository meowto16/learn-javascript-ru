/**
 * Работа с прототипами
 *
 * В приведённом ниже коде создаются и изменяются два объекта.
 *
 * Какие значения показываются в процессе выполнения кода?
 */

let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // null (2)

delete animal.jumps;

alert( rabbit.jumps ); // undefined (3)
