/**
 * Найти размер прокрутки снизу (важность: 5)
 *
 * Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?
 * Напишите соответствующее выражение для произвольного элемента elem.
 *
 * P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0.
 */

/**
 *
 * @param {HTMLElement} elem
 * @return {number}
 */
const getScrollBottom = (elem) => {
    return elem.scrollHeight - elem.scrollTop - elem.clientHeight
}

