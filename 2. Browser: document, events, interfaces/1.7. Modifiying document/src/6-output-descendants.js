/**
 * Выведите список потомков в дереве (важность: 5)
 *
 * Есть дерево, организованное в виде вложенных списков ul/li.
 *
 * Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.
 *
 * Результат:
 */

const nodes = document.querySelectorAll('li')

for (const li of nodes) {
    const liCount = li.querySelectorAll('li').length
    const firstNode = li.firstChild

    if (liCount > 0 && firstNode.nodeType === 3) {

        firstNode.nodeValue += `[${liCount}]`
    }
}