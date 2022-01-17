/**
 * Сортировать по полю (важность: 5)
 *
 * У нас есть массив объектов, который нужно отсортировать:
 *
 * let users = [
 *   { name: "John", age: 20, surname: "Johnson" },
 *   { name: "Pete", age: 18, surname: "Peterson" },
 *   { name: "Ann", age: 19, surname: "Hathaway" }
 * ];
 *
 * Можем ли мы сделать его короче, скажем, вот таким?
 *
 * users.sort(byField('name'));
 * users.sort(byField('age'));
 */

function byField(key, order = 'ASC') {
  return function(a, b) {
    if (order.toUpperCase() === 'DESC') {
      return a[key] < b[key] ? 1 : -1
    }
    
    return a[key] > b[key] ? 1 : -1
  }
}

module.exports = byField
