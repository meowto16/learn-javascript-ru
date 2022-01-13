/**
 * Форматирование относительной даты (важность: 4)
 *
 * Напишите функцию formatDate(date), форматирующую date по следующему принципу:
 *
 * Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
 * В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
 * В противном случае, если меньше часа, вывести "m мин. назад".
 * В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
 * Например:
 */

function formatDate(dateInstance) {
  const now = Date.now()
  const diff = now - dateInstance.getTime()
  
  if (diff < 1000) return 'прямо сейчас'
  if (diff < 1000 * 60) return `${Math.floor(diff / 1000)} сек. назад`
  if (diff < 1000 * 60 * 60) return `${Math.floor(diff / 1000 / 60)} мин. назад`
  
  return new Date(dateInstance).toLocaleString('ru-RU', {
    year: '2-digit',
    day: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).split(', ').join(' ')
}
