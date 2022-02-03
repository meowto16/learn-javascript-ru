/**
 * Странный instanceof (важность: 5)
 *
 * Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().
 */

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

// Решение: потому что сравнивается a.__proto__ с Object.prototype, а они у них одинаковые, так как prototype
// был изменен руками.
