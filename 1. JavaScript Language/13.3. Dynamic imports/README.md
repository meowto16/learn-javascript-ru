# Динамические импорты

Динамический импорт (dynamic import) используется почти также как и статический, 
но имеет несколько ключевых отличий:

- Возвращает `Promise`, который резолвится когда загрузится модуль и все его зависимости
- Хоть и выглядит как функция, но таковой не является. Не наследуется от `Function.prototype`

```js
import(modulePath)
  .then(obj => obj /* <объект модуля> */)
  .catch(err => err /* <ошибка загрузки, например если нет такого модуля> */)
```