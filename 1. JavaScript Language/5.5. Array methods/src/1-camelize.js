/**
 * Переведите текст вида border-left-width в borderLeftWidth (важность: 5)
 *
 * Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
 * То есть дефисы удаляются, а все слова после них получают заглавную букву.
 * Примеры:
 *
 * P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
 */

function camelize(str) {
  if (str === '') return ''
  return str
    .split('-')
    .map((chunk, idx) => {
      if (idx === 0) return chunk
      if (chunk.length === 0) return chunk
      return chunk[0].toUpperCase() + chunk.slice(1)
    })
    .join('')
}
