/**
 * Скрыть элемент по нажатию кнопки (важность: 5)
 *
 * Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
 */

const buttonNode = document.getElementById('hider')
const textNode = document.getElementById('text')

buttonNode.addEventListener('click', () => textNode.style.display = 'none')
