/**
 * Допустим, у нас есть массив arr.
 *
 * Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
 *
 * Например:
 */

function unique(arr) {
  return [...new Set(arr)]
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O
