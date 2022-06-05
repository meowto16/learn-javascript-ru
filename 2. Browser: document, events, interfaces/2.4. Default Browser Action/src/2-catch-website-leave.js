/**
 * Поймайте переход по ссылке (важность: 5)
 *
 * Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том,
 * действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
 */

const container = document.getElementById('contents')

const handleLinkClick = (event) => {
    const link = event.target.closest('a')
    const wantToLeave = confirm(`Leave for ${link.href}?`)

    return wantToLeave
        ? true
        : event.preventDefault()
}

container.addEventListener('click', function (event) {
    const tag = (
        (!!event.target.closest('a') && 'a')
    )

    switch (tag) {
        case 'a':
            return handleLinkClick.call(this, event)
        default:
            return
    }
})