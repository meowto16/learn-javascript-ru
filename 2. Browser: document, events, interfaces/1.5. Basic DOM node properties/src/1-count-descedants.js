/**
 * Считаем потомков (важность: 5)
 *
 * У нас есть дерево, структурированное как вложенные списки ul/li.
 *
 * Напишите код, который выведет каждый элемент списка <li>:
 *
 * Какой в нём текст (без поддерева) ?
 * Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
 */

const ul = document.querySelector('ul')
const li = ul.querySelectorAll('li')
document.write(ul.textContent)
document.write(`Число li: ${li.length}`)