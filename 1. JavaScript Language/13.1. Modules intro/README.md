# Модули, введение

Модуль - это некий файл, который можно импортировать как зависимость в другой файл.

- Чтобы работал `import/export` надо указывать у тега `<script>` тип модуль `<script type="module">`
```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```
- По-умолчанию модули выполняются отложенно `deferred`. Т.е даже если модуль загрузился
  быстро, то выполнится он все равно только после полной загрузки HTML документа.
  Но относительный порядок все равно сохраняется - скрипты, которые идут раньше - исполняются раньше.
```html
<script type="module">
  alert(typeof button); // object: скрипт может 'видеть' кнопку под ним
  // так как модули являются отложенными, то скрипт начнёт выполнятся только после полной загрузки страницы
</script>

Сравните с обычным скриптом ниже:

<script>
  alert(typeof button); // Ошибка: кнопка не определена, скрипт не видит элементы под ним
  // обычные скрипты запускаются сразу, не дожидаясь полной загрузки страницы
</script>

<button id="button">Кнопка</button>
```
- `async` атрибут работает во встроенных скриптах
```html
<!-- загружаются зависимости (analytics.js) и скрипт запускается -->
<!-- модуль не ожидает загрузки документа или других тэгов <script> -->
<script async type="module">
  import {counter} from './analytics.js';

  counter.count();
</script>
```
- Дублирующиеся внешние скрипты игнорируются
```html
<!-- скрипт my.js загрузится и будет выполнен только один раз -->
<script type="module" src="my.js"></script>
<script type="module" src="my.js"></script>
```
- Если необходимо загрузить модули с другого источника, то модули должны ставить заголовки `CORS`
```html
<!-- another-site.com должен указать заголовок Access-Control-Allow-Origin -->
<!-- иначе, скрипт не выполнится -->
<script type="module" src="http://another-site.com/their.js"></script>
```
- Каждый модуль имеет свою область видимости.
- В модулях всегда включена директива `use strict`
- Код в модулях выполняется **только один раз**. Т.е экспортируемая функциональность создается только один раз и
  передается всем импортерам

## import.meta

Объект `import.meta` содержит информацию о текущем модуле.
```html
<script type="module">
  alert(import.meta.url); // ссылка на html страницу для встроенного скрипта
</script>
```