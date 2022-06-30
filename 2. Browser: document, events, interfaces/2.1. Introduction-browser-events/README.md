# Введение в браузерные события

Событие – это сигнал от браузера о том, что что-то произошло. 
Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).

## Обработчики событий

Событию можно назначить обработчик, то есть функцию, которая сработает, как только событие произошло.

> Обработчик всегда хранится в свойстве DOM-объекта, а атрибут – лишь один из способов его инициализации.

> Так как у элемента DOM может быть только одно свойство с именем `onclick`, 
> то назначить более одного обработчика так нельзя.

## Доступ к элементу через this

Внутри обработчика события this ссылается на текущий элемент, то есть на тот, на котором, 
как говорят, «висит» (т.е. назначен) обработчик.

```js
<button onclick="alert(this.innerHTML)">Нажми меня</button>
```

Такой вызов работать не будет:
```js
// при нажатии на body будут ошибки,
// атрибуты всегда строки, и функция станет строкой
document.body.setAttribute('onclick', function() { alert(1) });
```

## addEventListener

Синтаксис добавления обработчика:

```js
element.addEventListener(event, handler, [options]);
```

- `event` - имя события, например "click"
- `handler` - ссылка на функцию обработчик
- `options` - дополнительный объект со свойствами:
  - `once` - обработчик сработает только один раз
  - `capture` - обозначает, что этот event должен отрабатывать первее, чем элементы ниже со слушателями
  - `passive` - означает, что внутри нет `preventDefault()`. Полезен для скролла например.

## Объект события

Некоторые свойства объекта event:

- `event.type` - Тип события
- `event.currentTarget` - Элемент, на котором сработал обработчик
- `event.clientX / event.clientY` - Координаты курсора в момент клика относительно окна

## Объект-обработчик: handleEvent

Мы можем назначить обработчиком не только функцию, но и объект при помощи `addEventListener`.
В этом случае, когда происходит событие, вызывается метод объекта `handleEvent`.
