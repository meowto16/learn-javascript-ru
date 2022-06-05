/**
 * Галерея изображений (важность: 5)
 *
 * Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
 */

const largeImage = document.getElementById('largeImg')
const thumbsContainer = document.getElementById('thumbs')

const handleThumbClick = (event) => {
    event.preventDefault()

    const link = event.target.closest('a')
    const thumb = event.target.closest('li')
    const thumbs = document.querySelectorAll('#thumbs li')

    thumbs.forEach(thumb => thumb.classList.remove('active'))
    thumb.classList.add('active')
    largeImage.src = link.href
    largeImage.alt = link.title
}

thumbsContainer.addEventListener('click', function (event) {
    const isThumbClicked = !!event.target.closest('a')

    if (isThumbClicked) {
        return handleThumbClick.call(this, event)
    }
})