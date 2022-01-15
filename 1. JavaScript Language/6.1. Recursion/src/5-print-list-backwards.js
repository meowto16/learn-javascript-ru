/**
 * Вывод односвязного списка в обратном порядке (важность: 5)
 *
 * Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
 *
 * Сделайте два решения: с использованием цикла и через рекурсию.
 */

function printListBackwardsLoop(list) {
  let head = list
  let values = [head.value]

  while (head.next) {
    head = head.next
    values.push(head.value)
  }
  
  for (let i = values.length - 1; i >= 0; i--) {
    alert(values[i])
  }
}

function printListBackwardsRecursive(list) {
  if (list.next) printListBackwardsRecursive(list.next)
  alert(list.value)
}

module.exports = {
  printListBackwardsLoop,
  printListBackwardsRecursive
}
