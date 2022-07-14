/**
 * Загрузите изображения с колбэком (важность: 4)
 *
 * Создайте функцию preloadImages(sources, callback), которая загружает все изображения из массива sources и,
 * когда все они будут загружены, вызывает callback.
 */

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', resolve.bind(this, image))
    image.addEventListener('error', reject.bind(this, image))

    image.src = src
  })
}

function preloadImages(sources, callback) {
  return Promise.all(sources.map(loadImage)).finally(callback)
}