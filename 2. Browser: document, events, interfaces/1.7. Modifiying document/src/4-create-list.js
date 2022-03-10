/**
 * Создайте список (важность: 4)
 *
 * Напишите интерфейс для создания списка.
 *
 * Для каждого пункта:
 *
 * Запрашивайте содержимое пункта у пользователя с помощью prompt.
 * Создавайте элемент <li> и добавляйте его к <ul>.
 * Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
 * Все элементы должны создаваться динамически.
 *
 * Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.
 */

const ul = document.createElement('ul')
document.body.insertAdjacentElement('beforeend', ul)

const createListElement = (text) => {
    const li = document.createElement('li')
    li.innerText = text

    return ul.insertAdjacentElement('beforeend', li)
}

let text

while (text = prompt('Введите текст')) {
    createListElement(text)
}