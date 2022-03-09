/**
 * Сделайте внешние ссылки оранжевыми (важность: 3)
 * Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
 *
 * Ссылка является внешней, если:
 *
 * Её href содержит ://
 * Но не начинается с http://internal.com.
 * Пример:
 */

const isExternalLink = link => {
    return link.includes('://')
        && !link.startsWith(window.location.origin)
        && !link.startsWith('http://internal.com')
}

const links = document.querySelectorAll('a')
const externalLinks = [...links].filter((link) => isExternalLink(link.href))

externalLinks.forEach(link => link.style.color = 'orange')