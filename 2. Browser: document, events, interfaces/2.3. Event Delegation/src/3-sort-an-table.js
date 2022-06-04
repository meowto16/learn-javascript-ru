/**
 * Сортируемая таблица (важность: 4)
 *
 * Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
 *
 * Каждый элемент <th> имеет атрибут data-type:
 */

// По приколу сделал через прокси с авто-ререндером

const table = document.getElementById('grid')
const tbody = table.querySelector('tbody')
const rows = tbody.querySelectorAll('tr')

const personsData = [...rows].map((row) => ({
    age: +row.children[0].textContent,
    name: row.children[1].textContent
}))

const persons = new Proxy(personsData, {
    get: (target, property, receiver) => {
        if (property === 'sort') {
            Array.prototype.sort.call(target)

            render()
        }

        return Reflect.get(target, property, receiver)
    },
    set: (target, property, value) => {
        target[property] = value

        render()
        return true
    }
})

const render = () => {
    tbody.innerHTML = persons
        .map(person => `
            <tr>
              <td>${person.age}</td>
              <td>${person.name}</td>
            </tr>
          `)
        .join('')

    return true
}

const handleSortClick = (type) => {
    switch (type) {
        case 'string':
            return persons.sort((a, b) => a.name.localeCompare(b.name))
        case 'number':
            return persons.sort((a, b) => a.age - b.age)
        default:
            return
    }
}

document.addEventListener('DOMContentLoaded', render)
table.addEventListener('click', (event) => {
    if (event.target.tagName !== 'TH') {
        return
    }

    return handleSortClick(event.target.dataset.type)
})