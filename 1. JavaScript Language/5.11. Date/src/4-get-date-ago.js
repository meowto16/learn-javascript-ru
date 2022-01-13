/**
 * Какой день месяца был много дней назад? (важность: 4)
 *
 * Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
 * К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
 * Функция должна надёжно работать при значении days=365 и больших значениях:
 */

function getDateAgo(date, days) {
  const newDate = new Date(date.getTime())
  newDate.setDate(date.getDate() - days)
  
  return newDate.getDate()
}
