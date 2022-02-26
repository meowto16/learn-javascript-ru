/**
 * Поиск элементов (важность: 4)
 *
 * Вот документ с таблицей и формой.
 *
 * Как найти?…
 *
 * Таблицу с id="age-table".
 * Все элементы label внутри этой таблицы (их три).
 * Первый td в этой таблице (со словом «Age»).
 * Форму form с именем name="search".
 * Первый input в этой форме.
 * Последний input в этой форме.
 * Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
 */

const table = document.getElementById('age-table')
const labels = table.querySelectorAll('label')
const td = table.querySelectorAll('tr:first-child > td:first-child')
const form = document.querySelector('form[name="search"]')
const firstInput = form.querySelector('input')
const lastInput = form.querySelector('input:last-child')