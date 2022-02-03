# Проверка класса: "instanceof"

`instanceof` - позволяет проверить, к какому классу принадлежит объект, с учётом наследования. Возвращает `true`, если
`obj` принадлежит классу `Class` или наследующему от него.

```js
class Rabbit {}
let rabbit = new Rabbit()

alert(rabbit instanceof Rabbit);
```

## Как работает instanceof

1. Сначала проверяет статический метод `[Symbol.hasInstance](obj)`. Это и есть возможность ручной настройки `instanceof`.
Он должен вернуть `true`/`false`
2. Либо начинают сравниваться прототипы вверх по цепочке. `Class.prototype`. Т.е сравнивается так:
```js
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?
```

> `obj instanceof Class` можно перефразировать как `Class.prototype.isPrototypeOf(obj)`.

## toString, Symbol.toStringTag

С помощью `toString` можно узнать тип, если позаимствовать этот метод из объекта.

```js
let s = Object.prototype.toString;

alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null]
alert( s.call(alert) ); // [object Function]
```

Поведение метода объектов можно настраивать через `Symbol.toStringTag`

```js
let user = {
  [Symbol.toStringTag]: "User"
};

alert( {}.toString.call(user) ); // [object User]
```
