/**
 * У нас есть объект salaries с зарплатами:
 *
 * Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
 *
 * Если объект salaries пустой, то нужно вернуть null.
 * Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
 * P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
 */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  return Object.entries(salaries).reduce((prev, cur) => {
    const [prevName, prevSalary] = prev
    const [curName, curSalary] = cur

    if (prev === null) return [curName, curSalary]

    return curSalary >= prevSalary ? cur : prev
  }, null)
}
