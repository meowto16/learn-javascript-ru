/**
 * Выделяемый список (важность: 5)
 *
 * Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.
 *
 * При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
 * Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.
 */

const container = document.getElementById('ul')

container.addEventListener('onmousedown', (event) => event.preventDefault())

container.addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') {
        return
    }

    const withCtrlKey = event.ctrlKey || event.metaKey

    if (withCtrlKey) {
        event.target.classList.toggle('selected')
    } else {
        container
            .querySelectorAll('li')
            .forEach(item => item.classList.remove('selected'))

        event.target.classList.add('selected')
    }
})