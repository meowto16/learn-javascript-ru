# Стили и классы

Если мы присваиваем что-то `elem.className`, то это заменяет всю строку с классами. 
Иногда это то, что нам нужно, но часто мы хотим добавить/удалить один класс.

`elem.classList` – это специальный объект с методами для добавления/удаления одного класса.

Методы `classList`:

- `elem.classList.add/remove("class")` – добавить/удалить класс.
- `elem.classList.toggle("class")` – добавить класс, если его нет, иначе удалить.
- `elem.classList.contains("class")` – проверка наличия класса, возвращает true/false.

Кроме того, classList является перебираемым, поэтому можно перечислить все классы 
при помощи `for..of`

## Element style

Свойство `elem.style` – это объект, который соответствует тому, что 
написано в атрибуте "style". Установка стиля `elem.style.width="100px"` 
работает так же, как наличие в атрибуте `style` строки `width:100px`.

Для свойства из нескольких слов используется camelCase:

```text
background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth
```

## Сброс стилей

Если мы установим в `style.display` пустую строку, то браузер применит CSS-классы и встроенные стили, 
как если бы такого свойства `style.display` вообще не было.

> Полная перезапись `style.cssText`
> 
> ```js
>  // можем даже устанавливать специальные флаги для стилей, например, "important"
> div.style.cssText=`color: red !important;
> background-color: yellow;
> width: 100px;
> text-align: center;
> `;
> 
> alert(div.style.cssText);
> ```

## Вычисленные стили: getComputedStyle

Свойство `style` оперирует только значением атрибута `style`, без учёта CSS-каскада.

```html
<head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body>

  <script>
    let computedStyle = getComputedStyle(document.body);

    // сейчас мы можем прочитать отступ и цвет

    alert( computedStyle.marginTop ); // 5px
    alert( computedStyle.color ); // rgb(255, 0, 0)
  </script>

</body>
```

Для чтения окончательных стилей (с учётом всех классов, после применения CSS и вычисления окончательных значений) используется:

Метод` getComputedStyle(elem, [pseudo])` возвращает объект, похожий по формату на `style`. Только для чтения.

> Вычисленное (computed) и окончательное (resolved) значения
> 
> Есть две концепции в CSS:
> 1. Вычисленное (computed) значение – это то, которое получено после применения всех CSS-правил и CSS-наследования. 
> Например, height:1em или font-size:125%.
> 
> 2. Окончательное (resolved) значение – непосредственно применяемое к элементу. 
> Значения 1em или 125% являются относительными.

> Стили, применяемые к посещённым :visited ссылкам, скрываются!
> 
> `getComputedStyle` не даёт доступ к этой информации, чтобы произвольная страница не могла определить, 
> посещал ли пользователь ту или иную ссылку, проверив стили
> 
> https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector

