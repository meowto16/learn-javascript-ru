/**
 * Выделите ячейки по диагонали (важность: 5)
 *
 * Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
 * Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
 */

const table = document.body.firstElementChild;
const tbody = table.firstElementChild
const rows = tbody.children

Array.from(rows).forEach((row, idx) => {
    row.children[idx].style.backgroundColor = 'red'
})