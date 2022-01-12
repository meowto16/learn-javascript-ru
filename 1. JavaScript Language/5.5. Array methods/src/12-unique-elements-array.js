/**
 * Оставить уникальные элементы массива (важность: 4)
 *
 * Пусть arr – массив строк.
 *
 * Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
 */

function unique(arr) {
  const map = {}
  
  return arr.reduce((acc, str) => {
    if (map[str]) return acc
    
    map[str] = true
    acc.push(str)
    
    return acc
  }, [])
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
