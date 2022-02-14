# Экспорт и импорт

Для импорта и экспорта существует большое кол-во различных вариантов.

## Экспорт до объявления

Можно разместить `export` перед выражением, чтобы сразу его экспортировать

```js
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const MODULES_BECAME_STANDARD_YEAR = 2015;

export class User {
    constructor(name) {
        this.name = name;
    }
}
```

## Экспорт отдельно от объявления

Можно писать экспорт и отдельно:

```js
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // список экспортируемых переменных
```

## Импорт *

Можно импортировать все сразу в виде объекта:

```js
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

Но есть три нюанса:

1. Таким образом не будет работать tree-shaking
2. Более длинные имена функций
3. Явное перечисление импортов делает код более понятным

## Импорт as

Можно заменять имена у импортов:

```js
// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
```

## Экспорт as

Можно заменять имена при экспорте:

```js
export {sayHi as hi, sayBye as bye};
```

## Экспорт по-умолчанию

Позволяет импортировать без фигурных скобок, указывая любое имя при импорте.

```js
// 📁 user.js
export default class User { // просто добавьте "default"
  constructor(name) {
    this.name = name;
  }
}
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'D

export default function(user) { // у функции нет имени
    alert(`Hello, ${user}!`);
}
```

## Имя default

Например, чтобы экспортировать функцию отдельно от её объявления:

```js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// то же самое, как если бы мы добавили "export default" перед функцией
export {sayHi as default};
```

