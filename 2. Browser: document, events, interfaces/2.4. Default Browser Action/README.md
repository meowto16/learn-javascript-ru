# Действия браузера по умолчанию

Многие события автоматически влекут за собой действие браузера.

Вроде:

- Клик по ссылке это переход на новый URL
- В форме если жмем отправить - отсылает на сервер
- В инпуте когда выделяем текст - это тоже событие браузера

## Отмена действия браузера

Есть два способа:

- `event.preventDefault()`, когда вешаем через `addEventListener`
- Можно вернуть `false`, если назначен обработчик через  `on<событие>`

```html
<a href="/" onclick="return false">Нажми здесь</a>
или
<a href="/" onclick="event.preventDefault()">здесь</a>
```

> Возвращать `true` не обязательно
> 
> Любой возврат из функции, кроме `return false` - игнорируется

## События, вытекающие из других

Некоторые события естественным образом вытекают друг из друга. 
Если мы отменим первое событие, то последующие не возникнут.

```js
<input value="Фокус работает" onfocus="this.value=''">
<input onmousedown="return false" onfocus="this.value=''" value="Кликни меня">
```

## Опция «passive» для обработчика

Необязательная опция passive: true для addEventListener сигнализирует браузеру, 
что обработчик не собирается выполнять `preventDefault()`.

Почему это может быть полезно?

Чтобы интерфейс был максимально плавным и без задержек. Используется в основном на эвентах,
вроде `scroll`, `touchmove` и т.д.

По сути `passive: true` просто говорит браузеру, что обработчик не собирается вызывать `event.preventDefault()`

## event.defaultPrevented

Свойство event.defaultPrevented установлено в `true`, если действие по умолчанию было предотвращено, 
и `false`, если нет.

Это свойство можно использовать вместо `event.stopPropagation()`. Другие обработчики, читая `event.defaultPrevented`, будут
понимать, что действие обработано уже.

