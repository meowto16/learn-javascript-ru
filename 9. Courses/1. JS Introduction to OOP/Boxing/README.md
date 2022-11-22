# Упаковка и распаковка (Boxing)

Примитивные значения не являются объектами.

Для каждого такого типа существует собственный конструктор, 
"упаковывающий" примитивный тип в объект:

```javascript
typeof 'hexlet'; // "string"
const name = new String('hexlet');
typeof name; // "object"
console.log(name); // "hexlet"
```

Т.е. например, все методы, которые мы вызываем на строках, хранятся в прототипе
конструктора `String`. То же самое касается и остальных типов.

В отличие от упаковки, распаковка выполняется абсолютно для всех объектов. 
Это позволяет определять `valueOf()` самостоятельно:
```javascript
const words = ['Hello'];
const helloBuilder = (string) => words.push(string);
const build = () => words.join(' ');

helloBuilder.valueOf = () => build();

helloBuilder('from');
helloBuilder('valueOf');

console.log(helloBuilder == 'Hello from valueOf'); // true
```
