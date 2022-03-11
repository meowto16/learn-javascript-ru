/**
 * Создать уведомление (важность: 5)
 *
 * Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification">
 * с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
 *
 * Пример объекта options:
 *
 * // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
 * showNotification({
 *   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
 *   right: 10, // 10px от правого края окна (по умолчанию 0px)
 *   html: "Hello!", // HTML-уведомление
 *   className: "welcome" // дополнительный класс для div (необязательно)
 * });
 */

function showNotification({ top = 10, right = 10, html, className = '' }) {
    const NOTIFICATION_TIMEOUT = 1500

    const div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.top = typeof top === 'number' ? `${top}px` : top
    div.style.right = typeof right === 'number' ? `${right}px`: right
    div.innerHTML = html
    div.className = className

    document.body.insertAdjacentElement('beforeend', div)

    setTimeout(() => div.remove(), NOTIFICATION_TIMEOUT)
}