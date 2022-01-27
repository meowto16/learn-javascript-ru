# F.prototype

Если в `F.prototype` содержится объект, оператор new устанавливает его в качестве `[[Prototype]]` для нового объекта.

Установка `Rabbit.prototype = animal` буквально говорит интерпретатору следующее: "При создании объекта через `new Rabbit() `
запиши ему `animal` в `[[Prototype]]`".
```js
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```

> F.prototype используется только в момент вызова функции конструктора. 

В обычных объектах prototype не является чем-то особенным. Будет обычным свойством.


