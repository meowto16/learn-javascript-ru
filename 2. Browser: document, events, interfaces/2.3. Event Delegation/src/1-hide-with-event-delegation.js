/**
 * Спрячьте сообщения с помощью делегирования
 *
 * Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
 * @type {HTMLElement}
 */

const container = document.getElementById('container')

container.addEventListener('click', (event) => {
    const pane = event.target.closest('.pane')
    const isRemoveButtonPressed = Boolean(event.target.closest('button.remove-button'))

    if (isRemoveButtonPressed) {
        pane.hidden = true
    }
})