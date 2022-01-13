# Деструктурирующее присваивание

**Деструктурирующее присваивание** - это специальный синтаксис, который позволяет нам "распаковать" массивы
или объекты в кучу переменных, так как иногда они более удобны.

```js
// Примеры
let arr = ["Ilya", "Kantor"]
let person = {}

let [firstname, secondname] = arr;
[person.firstname, person.secondname] = arr

// Работает с любым перебираемым объектом с правой стороны
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

// значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// rest
let [a, b, ...rest] = [1,2,3,4,5,6]
```

## Деструктуризация объекта

```js
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// default values
let {width = 100, height = 200, title} = options;

// default values and sourceProperty naming
let {width: w = 100, height: h = 200, title} = options;

// rest

let { width, height, ...rest } = options
```
