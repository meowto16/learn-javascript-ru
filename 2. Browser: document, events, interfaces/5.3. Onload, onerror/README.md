# Загрузка ресурсов: onload и onerror

Браузер позволяет отслеживать загрузку сторонних ресурсов.

Для этого существуют два события:

- `load` – успешная загрузка,
- `error` – во время загрузки произошла ошибка.

## Загрузка скриптов

```js
let script = document.createElement('script');

// мы можем загрузить любой скрипт с любого домена
script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"
document.head.append(script);

script.onload = function() {
  // в скрипте создаётся вспомогательная переменная с именем "_"
  alert(_.VERSION); // отображает версию библиотеки
};

script.onerror = function() {
  alert("Ошибка загрузки " + this.src); // Ошибка загрузки https://example.com/404.js
};
```

## Другие ресурсы

События load и error также срабатывают и для других ресурсов, 
а вообще, для любых ресурсов, у которых есть внешний `src`.

```js
let img = document.createElement('img');
img.src = "https://js.cx/clipart/train.gif"; // (*)

img.onload = function() {
  alert(`Изображение загружено, размеры ${img.width}x${img.height}`);
};

img.onerror = function() {
  alert("Ошибка во время загрузки изображения");
};
```

### Особенности

- Большинство ресурсов начинают загружаться после их добавления в документ.
  - За исключением тега `<img>`. Изображения начинают загружаться, когда получают `src` (*).
- Для <iframe> событие `load` срабатывает по окончании загрузки как в случае успеха, так и в случае ошибки.

> Чтобы разрешить кросс-доменный доступ, нам нужно поставить тегу `<script>` атрибут `crossorigin`, и, 
> кроме того, удалённый сервер должен поставить специальные заголовки.

1. Атрибут `crossorigin` отсутствует – доступ запрещён.
2. `crossorigin="anonymous"` – доступ разрешён, если сервер отвечает 
   с заголовком `Access-Control-Allow-Origin` со значениями `*` или наш домен.
   1. (куки не отправляются, требуется один серверный заголовок)
   2. Браузер не отправляет авторизационную информацию и куки на удалённый сервер.
3. `crossorigin="use-credentials"` – доступ разрешён, если сервер отвечает 
   с заголовками `Access-Control-Allow-Origin` со значением наш домен и `Access-Control-Allow-Credentials: true`. 
   1. (куки отправляются, требуются два серверных заголовка)
   2. Браузер отправляет авторизационную информацию и куки на удалённый сервер.

