# DOM-дерево

Каждый HTML-тег является объектом. Вложенные теги - дети родительского элемента.
Текст который внутри - тоже объект.

Текст внутри элементов образует текстовые узлы, обозначенные как `#text`. 
Текстовый узел содержит в себе только строку текста. 
У него не может быть потомков, т.е. он находится всегда на самом нижнем уровне.

Пробелы и переводы строки – это полноправные символы, как буквы и цифры. 
Они образуют текстовые узлы и становятся частью дерева DOM.

### Исключения

1. По историческим причинам пробелы и перевод строки перед тегом `<head>` игнорируются
2. Если мы записываем что-либо после закрывающего тега `</body>`, браузер автоматически перемещает эту запись в конец 
`body`, поскольку спецификация `HTML` требует, чтобы всё содержимое было внутри `<body>`. 
3. Поэтому после закрывающего тега `</body>` не может быть никаких пробелов.

> Пробелы по краям строк и пробельные текстовые узлы скрыты в инструментах разработки
> 
> Обычно они не влияют на то, как отображается документ.

## Автоисправление

Если браузер сталкивается с некорректно написанным HTML-кодом, он автоматически корректирует его при построении DOM.

> Таблицы всегда содержат `<tbody>`
> 
> Но в HTML их можно написать (официально) без него. 
> В этом случае браузер добавляет `<tbody>` в DOM самостоятельно.

## Другие типы узлов

Узел комментарий `#comment`. **Все, что есть в `HTML`, даже комментарии, является частью `DOM`.**
Даже директива `<!DOCTYPE...>`, которую мы ставим в начале `HTML`, тоже является `DOM`-узлом.

Существует [12 типов узлов](https://dom.spec.whatwg.org/#node). Но на практике мы в основном работаем с 4 из них:

1. document – «входная точка» в `DOM`.
2. узлы-элементы – `HTML`-теги, основные строительные блоки.
3. текстовые узлы – содержат текст.
4. комментарии – иногда в них можно включить информацию, которая не будет показана, 
   но доступна в `DOM` для чтения `JS`.

## Взаимодействие с консолью

Последний элемент, выбранный во вкладке Elements, 
доступен в консоли как `$0`; предыдущий, выбранный до него, как `$1` и т.д.

Еще есть `inspect`, который позволяет показать элемент во вкладке `Elements`.