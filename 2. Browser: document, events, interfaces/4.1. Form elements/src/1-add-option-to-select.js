/**
 * Добавьте пункт к выпадающему списку (важность: 5)
 *
 * Используя JavaScript:
 *
 * Выведите значение и текст выбранного пункта.
 * Добавьте пункт: <option value="classic">Классика</option>.
 * Сделайте его выбранным.
 */

const select = document.getElementById('genres')
const selectedOption = select.options[select.selectedIndex]

alert(`Сейчас выбрана опция "${selectedOption.innerText}"" со значением ${selectedOption.value}`)

select.append(new Option('Классика', 'classic', true, true))