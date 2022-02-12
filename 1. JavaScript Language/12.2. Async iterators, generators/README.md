# Асинхронные итераторы и генераторы

Асинхронные итераторы позволяют перебирать данные, поступающие асинхронно.

## Асинхронные итераторы

Вместо `[Symbol.iterator]` используется `Symbol.asyncIterator`, `next()` должен возвращать промис.

А для перебора используется `for await (let item of iterable)`

Пример объявления асинхронного итератора и его использования:
```js
let range = {
  from: 1,
  to: 5,

  // for await..of вызывает этот метод один раз в самом начале
  [Symbol.asyncIterator]() { // (1)
    // ...возвращает объект-итератор:
    // далее for await..of работает только с этим объектом,
    // запрашивая у него следующие значения вызовом next()
    return {
      current: this.from,
      last: this.to,

      // next() вызывается на каждой итерации цикла for await..of
      async next() { // (2)
        // должен возвращать значение как объект {done:.., value :...}
        // (автоматически оборачивается в промис с помощью async)

        // можно использовать await внутри для асинхронности:
        await new Promise(resolve => setTimeout(resolve, 1000)); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {

  for await (let value of range) { // (4)
    alert(value); // 1,2,3,4,5
  }

})()
```

## Асинхронные генераторы 

Просто добавляем `async` в начале, и генератор становится асинхронным.

```js
async function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {

    // ура, можно использовать await!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }

}

(async () => {

  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }

})();
```

А вот как это выглядит в итераторе:

```js
let range = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() { // то же, что и [Symbol.asyncIterator]: async function*()
    for (let value = this.from; value <= this.to; value++) {

      // пауза между значениями, ожидание
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield value;
    }
  }
};

(async () => {

  for await (let value of range) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }

})();
```