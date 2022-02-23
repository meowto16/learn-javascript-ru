/**
 * Дочерние элементы в DOM (важность: 5)
 *
 * Для страницы:
 * <html>
 * <body>
 *   <div>Пользователи:</div>
 *   <ul>
 *     <li>Джон</li>
 *     <li>Пит</li>
 *   </ul>
 * </body>
 * </html>
 */

const div = document.body.firstElementChild
const ul = div.nextElementSibling
const secondLi = ul.lastElementChild