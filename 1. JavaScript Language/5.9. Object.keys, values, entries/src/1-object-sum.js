/**
 * Сумма свойств объекта (важность: 5)
 *
 * Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
 * Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
 * Если объект salaries пуст, то результат должен быть 0.
 * Например:
 */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0)
}

alert( sumSalaries(salaries) ); // 650
