/**
 * Спрятать себя (важность: 5)
 *
 * Создайте кнопку, которая будет скрывать себя по нажатию.
 */

document.getElementById('button').addEventListener('click', function() {
    this.style.display = 'none'
})
