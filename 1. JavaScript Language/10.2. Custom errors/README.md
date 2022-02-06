# Пользовательские ошибки, расширение Error

Для создания пользовательских ошибок, необходимо наследоваться от класса `Error`.

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // не забываем вызывать super
    this.name = "ValidationError"; // и изменять name
  }
}
```

> Можно использовать `instanceof` для проверки типа ошибки

