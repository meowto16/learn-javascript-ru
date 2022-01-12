/**
 * Отфильтруйте анаграммы (важность: 4)
 *
 * Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
 */

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  const map = new Map();
  arr.forEach((word) => {
    const key = word.toLowerCase().split('').sort().join('')
    map.set(key, word)
  })
  return [...map.values()];
}

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
