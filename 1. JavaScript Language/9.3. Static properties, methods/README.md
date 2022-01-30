# Статические свойства и методы

Статические методы - это такие методы, которые присваиваются не `Prototype`, а самой функции, как отдельные методы.

Статические свойства и методы наследуются.

```js
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod();
```

В последних версиях браузеров можно еще делать даже свойства статическими:
```js
class Article {
  static publisher = "Илья Кантор";
}

alert( Article.publisher ); // Илья Кантор
```

## Как работает наследование для обычных и статических методов

```js
class Animal {}
class Rabbit extends Animal {}

// для статики
alert(Rabbit.__proto__ === Animal); // true

// для обычных методов
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true
```
