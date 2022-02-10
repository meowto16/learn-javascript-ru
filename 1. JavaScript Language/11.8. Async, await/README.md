# Async/await

Это специальный синтаксис для работы с промисами.

## Асинхронные функции

Такие функции всегда возвращают промис

```js
async function f() {
    return 1;
}

f().then(alert); // 1
```

Тоже самое, но явно:

```js
async function f() {
    return Promise.resolve(1);
}

f().then(alert); // 1
```

## Await

`await` - заставляет интерпретатор ждать до тех пор, пока промис справа от `await` не выполнится. После чего он
возвращает результат и выполнение кода продолжается.

> await работает с «thenable»–объектами
>
> ```js
> class Thenable {
>   constructor(num) {
>     this.num = num;
>   }
> 
>   then(resolve, reject) {
>     alert(resolve);
>     // выполнить resolve со значением this.num * 2 через 1000мс
>     setTimeout(() => resolve(this.num * 2), 1000); // (*)
>   }
> };
>
> async function f() {
>   // код будет ждать 1 секунду,
>   // после чего значение result станет равным 2
>   let result = await new Thenable(1);
>   alert(result);
> }
>
> f();
> ```

## Обработка ошибок

```js
async function f() {
  await Promise.reject(new Error("Упс!"));
}
```

Тоже самое, но иначе:
```js
async function f() {
  throw new Error("Упс!");
}
```

