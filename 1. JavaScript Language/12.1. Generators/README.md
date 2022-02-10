# Генераторы

Обычные функции возвращают только одно значение. А генераторы могут порождать несколько.

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
```

Основной метод генератора, это `next()`. Запускает выполнение кода до ближайшего `yield`.

В результате возвращает объект `{ value: значение из yield, done: boolean }`

## Перебор генераторов

Генераторы являются итерируемыми.

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1, затем 2
}
```

К ним даже можно применять `spread` оператор

```js
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let sequence = [0, ...generateSequence()];

alert(sequence); // 0, 1, 2, 3
```

## Использование для перебираемых объектов

```js
let range = {
  from: 1,
  to: 5,

  // for..of range вызывает этот метод один раз в самом начале
  [Symbol.iterator]() {
    // ...он возвращает перебираемый объект:
    // далее for..of работает только с этим объектом, запрашивая следующие значения
    return {
      current: this.from,
      last: this.to,

      // next() вызывается при каждой итерации цикла for..of
      next() {
        // нужно вернуть значение как объект {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};
```

А теперь тоже самое, но на генераторах:
```js
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};
```

## Композиция генераторов

Генераторы можно делегировать другим генераторам. Проще понять из примеров:

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    yield* generateSequence(48, 57);
    // Тоже самое что если встроить код
    // for (let i = 48; i <= 57; i++) yield i;

    yield* generateSequence(65, 90);
    // Тоже самое что если встроить код
    // for (let i = 65; i <= 90; i++) yield i;

    yield* generateSequence(97, 122);
    // Тоже самое что если встроить код
    // for (let i = 97; i <= 122; i++) yield i;
}
```

## Передача параметров в yield

Например, есть такой незамысловатый генератор.
```js
function* gen() {
  let ask1 = yield 3

  alert(ask1); // 4

  let ask2 = yield 4

  alert(ask2)

  yield ask1 + ask2
}
```

Передача в next аргумента, позволяет изменить предыдущий yield, его значение.

```js
const gent = gen()
gen.next() // { value: 3, done: false }
gen.next() // alert(3), return { value: 4, done: false }
gen.next() // alert(4), return { value: 7, done: true }
```

А теперь с аргументами:
```js
const gent = gen()
gen.next() // { value: 3, done: false }
gen.next(5) // alert(5), return { value: 4, done: false }
gen.next(8) // alert(8), return { value: 13, done: true }
```

## generator.throw

Можно инициировать ошибку.

```js
function* gen() {
  try {
    let result = yield "2 + 2 = ?"; // (1)

    alert("Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение");
  } catch(e) {
    alert(e); // покажет ошибку
  }
}

let generator = gen();

let question = generator.next().value;

generator.throw(new Error("Ответ не найден в моей базе данных")); 
```