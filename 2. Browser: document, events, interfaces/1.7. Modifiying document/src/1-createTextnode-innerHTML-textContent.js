/**
 * createTextNode vs innerHTML vs textContent (важность: 5)
 *
 * У нас есть пустой DOM-элемент elem и строка text.
 *
 * Какие из этих 3-х команд работают одинаково?
 *
 * elem.append(document.createTextNode(text))
 * elem.innerHTML = text
 * elem.textContent = text
 */

/**
 * Решение: ни один
 *
 * В первом случае вставится текст в конец, и не затрет другой текст
 * Во втором случае похож на третий (тем что затирает), но он вставляет еще HTML
 */