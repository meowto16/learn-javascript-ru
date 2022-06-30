/**
 * Бесконечная страница (важность: 5)
 *
 * Создайте бесконечную страницу. Когда посетитель прокручивает её до конца,
 * она автоматически добавляет текущие время и дату в текст (чтобы посетитель мог прокрутить ещё).
 *
 * Прокрутка «эластична». Можно прокрутить немного дальше начала или конца документа на
 * некоторых браузерах/устройствах (после появляется пустое место, а затем документ автоматически
 * «отскакивает» к нормальному состоянию).
 * Прокрутка неточна. Если прокрутить страницу до конца, можно оказаться в 0-50px от
 * реальной нижней границы документа.
 */

const INITIAL_ELEMENTS_COUNT = 60
const ADD_ELEMENTS_COUNT = 20
const OFFSET_FOR_INFINITE_SCROLL = 100

const container = document.getElementById('date-container')

const date = new Date()

const TimeElement = (date) => ({
    element: () => {
        const timeTag = document.createElement('time')
        timeTag.datetime = date.toISOString()
        timeTag.classList.add('date__item')
        timeTag.innerText = `${date}`

        return timeTag
    },

    html: () => {
        return `<time datetime="${date.toISOString()}" class="date__item">${date}</time>`
    }
})

container.innerHTML = TimeElement(date).html().repeat(INITIAL_ELEMENTS_COUNT)

window.addEventListener('scroll', () => {
    const offsetY = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    const scrollHeight = document.documentElement.scrollHeight

    if (clientHeight + offsetY >= scrollHeight - OFFSET_FOR_INFINITE_SCROLL) {
        const currentDate = new Date()

        for (let i = 0; i < ADD_ELEMENTS_COUNT; i++) {
            const element = TimeElement(currentDate).element()
            container.appendChild(element)
        }
    }
}, { passive: true })