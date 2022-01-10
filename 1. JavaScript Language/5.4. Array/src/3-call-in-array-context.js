/**
 * Вызов в контексте массива (важность: 5)
 *
 * Каков результат? Почему?
 */

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

// Решение: выведет содержимое массива (весь массив), так как вызов свойства идет в массиве (тот же объект)