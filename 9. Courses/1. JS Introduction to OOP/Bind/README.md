# Связывание (bind)

## Потеря контекста

```javascript
// printer.print - это не вызов, а передача функции
setTimeout(printer.print, 1000);

// Спустя секунду
// => "hello, undefined"
```

Тут функция теряет связь с контекстом `this` и он больше не указывает на объект
`printer`.

Вариантов решения несколько:

- Обернуть в анонимную функцию
```javascript
setTimeout(() => printer.print(), 1000);
// Спустя секунду
// => "hello, Hexlet"
```
- Связать функцию с контекстом (забиндить)
```javascript
const boundPrint = printer.print.bind(printer);

// Теперь можно так
boundPrint(); // => "hello, Hexlet"
setTimeout(boundPrint, 1000);
// Через секунду
// => "hello, Hexlet"
```

## Apply & Call

Иногда вызов функций, использующих внутри себя `this`, происходит сразу вместе с привязкой контекста. 
Это можно сделать напрямую, сразу же вызвав функцию, возвращаемую `bind`: `...bind`(/* контекст */)():

```javascript
const print = printer.print;
print.bind(printer)('hi'); // => "hi, Hexlet"
```

А можно использовать специально созданные для этого функции `apply()` и `call()`:
```javascript
// func.apply(thisArg, [ argsArray])
print.apply(printer, ['hi']); // hi, Hexlet

// func.call([thisArg[, arg1, arg2, ...argN]])
print.call(printer, 'hi'); // hi, Hexlet
```

