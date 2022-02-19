# Каррирование

**Каррирование** – это трансформация функций таким образом, 
чтобы они принимали аргументы не как `f(a, b, c)`, а как `f(a)(b)(c)`.

Функция каррирования есть в `lodash`, `_.curry(func)`. 

Либо же можно написать свою реализацию:

```js
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}
```

Что касается пользы каррирования - позволяет удобно применять функцию *частично*.