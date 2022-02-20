# BigInt

**BigInt** – это специальный числовой тип, который предоставляет возможность 
работать с целыми числами произвольной длины. Были добавлены в язык недавно.

Как создать:

```js
const bigint = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890")
const bigintFromNumber = BigInt(10); // то же самое, что и 10n
```

## Работа с Number

**BigInt** умеет работать с `Number`, но только до того момента, пока `Number` меньше `Number.MAX_SAFE_INTEGER`.

```js
alert(1n + 2n); // 3
alert(5n / 2n); // 2
alert(1n + 2); // Error: Cannot mix BigInt and other types
```

Но нужно явно преобразовывать:
```js
let bigint = 1n;
let number = 2;

// конвертируем number в bigint
alert(bigint + BigInt(number)); // 3

// конвертируем `bigint` в number
alert(Number(bigint) + number); // 3
```

> К BigInt нельзя применить унарный оператор `+`

Операции сравнения:

```js
alert( 2n > 1n ); // true
alert( 2n > 1 ); // true

alert( 1 == 1n ); // true
alert( 1 === 1n ); // false
```

Логические операции:

```js
if (0n) {
  // никогда не выполнится
}

alert( 1n || 2 ); // 1
alert( 0n || 2 ); // 2
```

## Полифил

Это сложная задача, но есть библиотека `JSBI`, которой можно заменить вызовы `BigInt`.