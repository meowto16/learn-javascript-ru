/**
 * Раскрывающееся дерево (важность: 5)
 *
 * Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
 *
 * Требования:
 *
 * - Использовать только один обработчик событий (применить делегирование)
 * - Клик вне текста заголовка (на пустом месте) ничего делать не должен.
 */

const container = document.getElementById('tree')

container.addEventListener('click', (event) => {
    const isClickedSpan = event.target.tagName === 'SPAN'

    if (!isClickedSpan) {
        return
    }

    const listItem = event.target.closest('li')
    const ul = listItem.querySelector('ul')

    if (!ul) {
        return
    }

    ul.hidden = !ul.hidden
})