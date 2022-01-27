/**
 * Изменяем "prototype" (важность: 5)
 *
 * В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
 * Сначала у нас есть такой код:
 */

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ? - Покажет true, так как prototype нужен только на момент вызова через new.

// … А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // ? - Покажет false, так как прототип - это один и тот же объект, тут просто ссылка на него

// Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // ? - будет true, так как мы удалим свойство из объекта. а из прототипа не можем.

// Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ? - будет undefined, так как удалим свойство из объекта прототипа.
