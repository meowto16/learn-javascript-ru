/**
 * Сколько сегодня прошло секунд?
 *
 * Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
 * Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
 *
 * getSecondsToday() == 36000 // (3600 * 10)
 *
 * Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
 */

function getSecondsToday() {
  const today = new Date()
  const hours = today.getHours()
  const minutes = today.getMinutes()
  const seconds = today.getSeconds()
  
  return (hours * 60 * 60) + (minutes * 60) + seconds
}
