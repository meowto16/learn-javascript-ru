/**
 * Передвиньте мяч по полю (важность: 5)
 *
 * Пусть мяч перемещается при клике на поле, туда, куда был клик
 *
 * Требования:
 *
 * Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
 * CSS-анимация желательна, но не обязательна;
 * Мяч ни в коем случае не должен пересекать границы поля;
 * При прокрутке страницы ничего не должно ломаться;
 * Заметки:
 *
 * Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
 * Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.
 */

const fieldNode = document.getElementById('field')
const ballNode = document.getElementById('ball')

fieldNode.addEventListener('click', function (e) {
    const { top, left } = this.getBoundingClientRect()
    const x = e.clientX - left - (ballNode.offsetWidth / 2)
    const y = e.clientY - top - (ballNode.offsetHeight / 2)

    ballNode.style.transform = `translate(${x}px, ${y}px)`
}, { passive: true })