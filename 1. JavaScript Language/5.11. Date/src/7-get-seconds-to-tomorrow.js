/**
 * Сколько секунд осталось до завтра? (важность: 5)
 *
 * Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
 *
 * Например, если сейчас 23:00, то:
 *
 * P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
 */

function getSecondsToTomorrow() {
  const today = new Date()
  const nextDay = new Date()
  nextDay.setHours(0)
  nextDay.setMinutes(0)
  nextDay.setSeconds(0)
  nextDay.setDate(nextDay.getDate() + 1)

  return (nextDay - today) / 1000
}
