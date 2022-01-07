/**
 * Две функции - один объект (важность: 2)
 *
 * Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
 */

/**
 * function A() { ... }
 * function B() { ... }
 *
 * let a = new A;
 * let b = new B;
 *
 * alert( a == b ); // true
 */

// Решение:

const someObj = {}

function A() {
  return someObj
}

function B() {
  return someObj
}

let a = new A()
let b = new B()

console.log(a === b)
