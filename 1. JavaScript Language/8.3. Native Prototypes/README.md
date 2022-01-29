# Встроенные прототипы

Все встроенные функции-конструкторы используют `prototype`.

Краткая нотация `obj = {}` – это то же самое, что и `obj = new Object()`

Когда вызывается `obj.toString()`, метод берётся из `Object.prototype`.

Есть другие встроенные прототипы, типа `Array`, `Function`, `String` и т.д.

```js
let arr = [1, 2, 3];

// наследует ли от Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true

// затем наследует ли от Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// и null на вершине иерархии
alert( arr.__proto__.__proto__.__proto__ ); // null
```

## Примитивы

У примитивов создается обертка на момент обращения к методу.
Методы этих объектов также находятся в прототипах, доступных как `String.prototype`, `Number.prototype` и `Boolean.prototype`

## Изменение встроенных прототипов

Встроенные прототипы можно, **но не нужно** изменять. Стоит изменять только если надо какой-то полифилл добавить.
