# Дата

## Конструкторы

- `new Date()` - создает с текущей датой и временем
- `new Date(ms)` - можно передать timestamp-метку в миллисекундах
- `new Date(datestring)` - можно передать дату в строковом формате
- `new Date(year, month, date, hours, minutes, seconds, ms)` - можно передать все нужные параметры для установки

## Методы

- `date.getFullYear()` - получить год (4 цифры)
- `date.getMonth()` - получить месяц, от 0 до 11
- `date.getDate()` - получить день месяца, от 1 до 31
- `date.getDay()` - получить день недели, от 0 до 6
- `date.getHours()` - получить часы
- `date.getMinutes()` - получить минуты
- `date.getSeconds()` - получить секунды
- `date.getMilliseconds()` - получить миллисекунды
- `date.getUTCFullYear()` - год для временной зоны `+0`
- `date.getUTCMonth()` - месяц для временной зоны `+0`
- `date.getUTCDay()` - день для временной зоны `+0`
- `date.getTimezoneOffset()` - возвращает разницу в минутах между UTC и местным часовым поясом

## Установка компонентов даты

- `setFullYear(year, [month], [date])`
- `setMonth(month, [date])`
- `setDate(date)`
- `setHours(hour, [min], [sec], [ms])`
- `setMinutes(min, [sec], [ms])`
- `setSeconds(sec, [ms])`
- `setMilliseconds(ms)`
- `setTime(milliseconds)`

> У всех методов есть `UTC`-вариант

## Автоисправление даты

Неправильные компоненты даты автоматически распределяются по остальным.

Используется когда надо прибавить/удалить дни/часы/минуты

## Разбор строки с датой

Метод `Date.parse()`

Формат строки должен быть следующим: `YYYY-MM-DDTHH:mm:ss.sssZ`
