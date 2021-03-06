# Конструкторы, создание объектов через "new"

Обычный синтаксис `{...}` позволяет создать только один объект. 
Конструкторы нужны для создания множества однотипных объектов.

## Функция-конструктор

Это обычная функция, но есть два соглашения

1. Начинается с большой буквы
2. Должна вызываться при помощи оператора `new`

### Что происходит, когда вызывается `new`

1. Создается пустой объект, и он присваивается `this`
2. Выполняется код функции
3. Возвращается значение `this`

## Анонимный конструктор

Можно вызывать конструктор единожды, если он не нужен в других местах:

```js
const user = new function() {
  this.name = 'Вася'
  this.isAdmin = false
}
```

## Проверка на вызов в режиме конструктора new.target

```js
function User() {
  alert(new.target);
}

// без "new":
User(); // undefined

// с "new":
new User(); // function User { ... }
```

## Возврат значения из конструктора return

Вообще, конструктор всегда неявно возвращает `this`. Но это поведение можно перебить и вернуть свой `return`.

Но есть нюанс, если возвращается не объект, а примитив - то `return` будет игнорироваться.

## Общее

> Date, Set и пр. являются функциями-конструкторами! Только встроенными

