/**
 * Кнопка вверх/вниз (важность: 5)
 *
 * Создайте кнопку «наверх», чтобы помочь с прокруткой страницы.
 *
 * Она должна работать следующим образом:
 *
 * Пока страница не прокручена вниз хотя бы на высоту окна – кнопка невидима.
 * Когда страница прокручена вниз больше, чем на высоту окна – появляется стрелка «наверх» в левом верхнем углу. Если страница прокручивается назад, стрелка исчезает.
 * Когда нажимается стрелка, страница прокручивается вверх.
 */

const getArrowTopElement = () => document.getElementById('arrowTop')

document.addEventListener('DOMContentLoaded', () => {
    const arrowElement = getArrowTopElement()
    arrowElement.hidden = true
    arrowElement.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
})

window.addEventListener('scroll', () => {
    const arrowElement = getArrowTopElement()
    const clientHeight = document.documentElement.clientHeight
    const offsetY = document.documentElement.scrollTop

    if (offsetY > clientHeight && arrowElement.hidden) {
        arrowElement.hidden = false
    }

    if (offsetY <= clientHeight && !arrowElement.hidden) {
        arrowElement.hidden = true
    }
}, { passive: true })