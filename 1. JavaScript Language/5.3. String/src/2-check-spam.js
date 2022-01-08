/**
 * Проверка на спам (важность: 5)
 *
 * Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
 * Функция должна быть нечувствительна к регистру:
 */

function checkSpam(str) {
  const bannedWords = ['viagra', 'xxx']
  
  return bannedWords.some(bannedWord => (str || '').toLowerCase().includes(bannedWord))
}
