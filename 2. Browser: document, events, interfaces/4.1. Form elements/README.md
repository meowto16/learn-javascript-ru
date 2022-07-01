# Свойства и методы формы

Формы в документе входят в специальную коллекцию` document.forms`.

Это так называемая «именованная» коллекция: мы можем использовать для получения формы 
как её имя, так и порядковый номер в документе.

```js
document.forms.my // - форма с именем "my" (name="my")
document.forms[0] // - первая форма в документе
```

Когда мы уже получили форму, любой элемент доступен в именованной коллекции `form.elements`
```js
// получаем форму
let form = document.forms.my; // <form name="my"> element

// получаем элемент
let elem = form.elements.one; // <input name="one"> element

alert(elem.value); // 1
```

Может быть несколько элементов с одним и тем же именем, это часто бывает с кнопками-переключателями radio.
```html
<form>
  <input type="radio" name="age" value="10">
  <input type="radio" name="age" value="20">
</form>

<script>
let form = document.forms[0];

let ageElems = form.elements.age;

alert(ageElems[0]); // [object HTMLInputElement]
</script>
```

> `<fieldset>` как «подформа»
> 
> Форма может содержать один или несколько элементов `<fieldset>` внутри себя. 
> Они также поддерживают свойство `elements`, 
> в котором находятся элементы управления внутри них.
> 
```html
<body>
  <form id="form">
    <fieldset name="userFields">
      <legend>info</legend>
      <input name="login" type="text">
    </fieldset>
  </form>

  <script>
    alert(form.elements.login); // <input name="login">

    let fieldset = form.elements.userFields;
    alert(fieldset); // HTMLFieldSetElement

    // мы можем достать элемент по имени как из формы, так и из fieldset с ним
    alert(fieldset.elements.login == form.elements.login); // true
  </script>
</body>
```

### Сокращённая форма записи: `form.name`

Вместо `form.elements.login` мы можем написать `form.login`.

```html
<form id="form">
  <input name="login">
</form>

<script>
  alert(form.elements.login == form.login); // true, ведь это одинаковые <input>

  form.login.name = "username"; // изменяем свойство name у элемента input

  // form.elements обновили свои имена:
  alert(form.elements.login); // undefined
  alert(form.elements.username); // input

  // а в form мы можем использовать оба имени: новое и старое
  alert(form.username == form.login); // true
</script>
```

### Обратная ссылка: `element.form`

Для любого элемента форма доступна через `element.form`.
```html
<form id="form">
  <input type="text" name="login">
</form>

<script>
  // form -> element
  let login = form.login;

  // element -> form
  alert(login.form); // HTMLFormElement
</script>
```

## Элементы формы

Значения элементов формы доступны через `input.value`, `textarea.value`, `select.value` и т.д. либо `input.checked `
для чекбоксов и переключателей.

Для элемента `<select>` мы также можем получить индекс выбранного пункта через `select.selectedIndex`, либо 
используя коллекцию пунктов `select.options`.

В спецификации есть красивый короткий синтаксис для создания элемента `<option>`:

```js
let option = new Option("Текст", "value");
// создаст <option value="value">Текст</option>
```

