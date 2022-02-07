/**
 * Можно ли "перевыполнить" промис?
 *
 * Что выведет код ниже?
 */

let promise = new Promise(function(resolve, reject) {
  resolve(1);
  
  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// Решение, выведет только 1
// resolve(2) не отработает, так как промис уже будет находиться в состоянии fulfilled
