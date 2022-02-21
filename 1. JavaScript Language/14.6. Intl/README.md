# Intl: интернационализация в JavaScript

**Intl** это встроенный объект, который предназначен для локализации, предоставляет языко-зависимое
сравнение строк, форматирование даты и времени, форматирования чисел.

## Основные объекты

- `Intl.Collator` - умеет правильно сравнивать и сортировать строки
```js
let collator = new Intl.Collator();

alert( "ёжик" > "яблоко" ); // true (ёжик больше, что неверно)
alert( collator.compare("ёжик", "яблоко") ); // -1 (ёжик меньше, верно)
```
- `Intl.DateTimeFormat` - умеет форматировать дату и время
```js
let date = new Date(2014, 11, 31, 12, 30, 0);

let formatter = new Intl.DateTimeFormat("ru", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

alert( formatter.format(date) ); // среда, 31 декабря 2014 г.
```
- `Intl.NumberFormat` - умеет форматировать числа
```js
let formatter = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2
});

alert( formatter.format(1234.5) ); // 1 234,50 £
```

## Локаль

Локаль описывается строкой из трёх компонентов, которые разделяются дефисом:

1. Код языка.
2. Код способа записи.
3. Код страны.

Стандарт, который описывает локали – [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)

## Методы в Date, String, Number

- `String.prototype.localeCompare(that [, locales [, options]])`
- `Date.prototype.toLocaleString([locales [, options]])`
- `Date.prototype.toLocaleDateString([locales [, options]])`
- `Date.prototype.toLocaleTimeString([locales [, options]])`
- `Number.prototype.toLocaleString([locales [, options]])`