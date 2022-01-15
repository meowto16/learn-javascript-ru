/**
 * Вывод односвязного списка (важность: 5)
 *
 * Напишите функцию printList(list), которая выводит элементы списка по одному.
 * Сделайте два варианта решения: используя цикл и через рекурсию.
 * Как лучше: с рекурсией или без?
 *
 * // Решение: мне кажется лучше без рекурсии, так как будет быстрее. Но с рекурсией код выглядит привлекательнее
 */

function printListLoop(list) {
  let head = list

  while (head) {
    alert(head.value)
    head = head.next
  }
}

function printListRecursive(list) {
  alert(list.value)
  if (list.next) printListRecursive(list.next)
}

module.exports = {
  printListLoop,
  printListRecursive
}
