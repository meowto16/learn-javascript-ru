/**
 * Простая страница (важность: 4)
 *
 * Создайте страницу, которая спрашивает имя у пользователя и выводит его.
 */

let name

while (!name) {
  name = prompt('Введите имя')
}

alert(`Привет, ${name}`)