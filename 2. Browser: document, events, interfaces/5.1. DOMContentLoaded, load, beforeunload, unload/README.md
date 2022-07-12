# Страница: DOMContentLoaded, load, beforeunload, unload

У жизненного цикла HTML-страницы есть 3 события:
- `DOMContentLoaded` - браузер загрузил полностью `HTML`, было построено DOM-дерево,
но внешние ресурсы, такие как картинки `<img />` и стили, еще могут быть не загружены
- `load` - браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д)
- `beforeunload/unload` - пользователь покидает страницу.

## DOMContentLoaded

Срабатывает на объекте `document`.

Когда браузер обрабатывает HTML-документ и встречает тег `<script>`, 
он должен выполнить его перед тем, как продолжить строить DOM. 

Есть исключения:
- Скрипты с атрибутом `async`.
- Скрипты, сгенерированные динамически, при помощи `document.createElement('script')`,
  и затем добавленные на страницу.

## DOMContentLoaded и стили

Если после стилей у нас есть скрипт, то этот скрипт должен дождаться, пока загрузятся стили:

```html
<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // скрипт не выполняется, пока не загрузятся стили
  alert(getComputedStyle(document.body).marginTop);
</script>
```

## Встроенное в браузер автозаполнение

Firefox, Chrome и Opera автоматически заполняют поля при наступлении `DOMContentLoaded`.

Так что, если `DOMContentLoaded` откладывается из-за долгой загрузки скриптов, 
в свою очередь – откладывается автозаполнение.

## window.onload

Событие `load` на объекте `window` наступает, когда загрузилась вся страница, 
включая стили, картинки и другие ресурсы.

## window.onunload

Когда посетитель покидает страницу, на объекте `window` генерируется событие `unload`.

- Обычно здесь отсылают статистику.
  - Для этого существует специальный метод `navigator.sendBeacon(url, data)`, описанный в спецификации https://w3c.github.io/beacon/. 
  - Он посылает данные в фоне. Переход к другой странице не задерживается: браузер покидает страницу, но всё равно выполняет `sendBeacon`.

## window.onbeforeunload

Если посетитель собирается уйти со страницы или закрыть окно, 
обработчик `beforeunload` попросит дополнительное подтверждение.

```js
window.onbeforeunload = function() {
  return "Есть несохранённые изменения. Всё равно уходим?";
};
```

## readyState

Свойство `document.readyState` показывает нам текущее состояние загрузки.

Есть три возможных значения:
- `loading` – документ загружается.
- `interactive` – документ был полностью прочитан.
  - Происходит примерно в то же время, что и `DOMContentLoaded`, но до него.
- `complete` – документ был полностью прочитан и все ресурсы (такие как изображения) были тоже загружены.
  - Происходит примерно в то же время, что и `window.onload`, но до него.

```js
function work() { /*...*/ }

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', work)
  : work()
```

Также есть событие `readystatechange`, которое генерируется при изменении состояния, 
так что мы можем вывести все эти состояния таким образом:

```js
// текущее состояние
console.log(document.readyState);

// вывести изменения состояния
document.addEventListener('readystatechange', () => console.log(document.readyState));
```

## Разбор примера

Очередность логов
```html
<script>
    log('начальный readyState:' + document.readyState);

    document.addEventListener('readystatechange', () => log('readyState:' + document.readyState));
    document.addEventListener('DOMContentLoaded', () => log('DOMContentLoaded'));

    window.onload = () => log('window onload');
</script>

<iframe src="iframe.html" onload="log('iframe onload')"></iframe>

<img src="http://en.js.cx/clipart/train.gif" id="img">
<script>
    img.onload = () => log('img onload');
</script>
```

***Ответ:***
1. `[1]` начальный readyState:loading
2. `[2]` readyState:interactive
3. `[2]` DOMContentLoaded
4. `[3]` iframe onload
5. `[4]` img onload
6. `[4]` readyState:complete
7. `[4]` window onload


