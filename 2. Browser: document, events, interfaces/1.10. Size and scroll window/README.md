# Размеры и прокрутка окна

- `window.innerWidth/innerHeight` включают в себя полосу прокрутки.
- `window.clientWidth/clientHeight` не включают в себя полосу прокрутки

Чтобы надёжно получить полную высоту документа, нам следует взять максимальное из этих свойств:

```js
const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
```

Текущую прокрутку можно прочитать из свойств `window.pageXOffset/pageYOffset`

## Прокрутка: scrollTo, scrollBy, scrollIntoView

Обычные элементы можно прокручивать, изменяя `scrollTop/scrollLeft`.

Есть и другие способы, в которых подобных несовместимостей нет: 
специальные методы `window.scrollBy(x,y)` и `window.scrollTo(pageX,pageY)`.

## scrollIntoView

Вызов elem.scrollIntoView(top) прокручивает страницу, чтобы elem оказался вверху. У него есть один аргумент:

- если `top=true` (по умолчанию), то страница будет прокручена, чтобы `elem` появился в верхней части окна. 
  Верхний край элемента совмещён с верхней частью окна.
- если `top=false`, то страница будет прокручена, чтобы elem появился внизу. 
  Нижний край элемента будет совмещён с нижним краем окна.

## Запретить прокрутку

Чтобы запретить прокрутку страницы, достаточно установить `document.body.style.overflow = "hidden"`.


