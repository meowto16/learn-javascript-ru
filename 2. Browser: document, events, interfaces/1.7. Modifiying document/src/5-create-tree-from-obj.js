/**
 * Создайте дерево из объекта (важность: 5)
 *
 * Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
 *
 * Например:
 *
 * let data = {
 *   "Рыбы": {
 *     "форель": {},
 *     "лосось": {}
 *   },
 *
 *   "Деревья": {
 *     "Огромные": {
 *       "секвойя": {},
 *       "дуб": {}
 *     },
 *     "Цветковые": {
 *       "яблоня": {},
 *       "магнолия": {}
 *     }
 *   }
 * };
 *
 * let container = document.getElementById('container');
 * createTree(container, data); // создаёт дерево в контейнере
 */

const createTree = (container, data) => {
    const ul = document.createElement('ul')

    for (const key in data) {
        const value = data[key]
        const li = document.createElement('li')

        const isNeedRecursion = Object.keys(value).length

        li.insertAdjacentText('beforeend', key)

        if (isNeedRecursion) li.insertAdjacentElement('beforeend', createTree(li, data[key]))

        ul.insertAdjacentElement('beforeend', li)
    }

    container.insertAdjacentElement('beforeend', ul)

    return ul
}