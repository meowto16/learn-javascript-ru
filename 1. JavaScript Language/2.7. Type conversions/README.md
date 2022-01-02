# Преобразование типов

Это процесс конвертации значения из одного типа в другой. 
В JS существует всего 3 типа конвертации:

- Строковое
- Численное
- Булевое

Существуют явные и неявные преобразования к типу:

- Явное - при применении функций `String()`, `Number()`, `Boolean()`
- Неявное - при вызове операторов

Полезные ресурсы:
- [JavaScript Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)
- [wtfjs.com](https://wtfjs.com/)

## Строковое преобразование

Как преобразовать:
- `String(value)`
- `${value}`
- `value.toString()`

Примеры:
```js
// Объекты преобразуются через Symbol.toPrimitive или методы toString/valueOf
String({ a: 1 }) // '[object Object]'
String([1,2,3]) // '1,2,3'

// Примитивы преобразуются к строке очевидным образом
String(undefined)      // 'undefined'
String(1)             // '1'
String(null)          // 'null'
String(true)          // 'true'
String(false)         // 'false'
String(Symbol('123')) // 'Symbol(123)'
String(NaN)           // 'NaN'
String(Infinity)       // 'Infinity'
String(-Infinity)      // '-Infinity'
```

Интересно, что символы преобразуются к строке только явно:
```js
String(Symbol('my symbol'))   // 'Symbol(my symbol)'
'' + Symbol('my symbol')      // TypeError is thrown
```

### Численное преобразование

Как преобразовать:

- Операторы сравнения. `>`, `<`, `<=`, `>=`
- Бинарные операторы. `|`, `&`, `^`, `~`
- Арифметические операторы. `*`, `-`, `/`, `%`, `**`
  - Особняком стоит `+`
    - Если один из операндов является строкой, преобразует оба к строке
- Унарный оператор `+`
- Оператор нестрого равенства `==`, `!=`
  - Не вызывает численное преобразование, если оба операнда являются строками

Пример неявного преобразования:
```js
2 + 2 + '2' // 42, сначала складываются первые два числа, затем конкатенация
```


> При преобразовании строки в число, движок сначала отсекает все пробелы слева и справа,
> затем пытается преобразовать. Вернет либо число, либо NaN
> 
> ```js
> Number('  12  ') // 12
> Number('anything') // NaN
> ```

Примеры преобразований:
```js
// Примитивы
Number(undefined) // NaN
Number(null) // 0
Number('1') // 1
Number('anything') // NaN
Number(Infinity) // Infinity
Number(-Infinity) // -Infinity
Number(Symbol()) // Typeerror: Cannot convert a Symbol value to a number

// Объекты
Number([]) // 0
Number([10]) // 10
Number([10, 15]) // NaN
Number({}) // NaN
Number(new Date()) // 1641093339094, unix timestamp
```

Есть **два** специальных правила:

- При применении `==` к `null` или `undefined` численного преобразования не происходит.
```js
null == 0 // false, null не конвертируется в 0
null == null // true
undefined == undefined // true
null == undefined // true
```
- `NaN` не равен ничему, даже самому себе.
```js
NaN == NaN // false
NaN === NaN // false
```

## Булевое преобразование

Как преобразовать:

- Явно. `Boolean(2)`
- Неявно. Через логический контекст. `if (2) { ... }`
- Неявно. Через логический оператор. `!!2`
- Неявно. Через логический оператор. `2 || 'hello'`

> Логические операторы такие как `||` и `&&`
> производят булевое преобразование под капотом, но при этом всегда возвращают
> оригинальное значение операндов, даже если они не являются булевыми.
> 
> ```js
> let x = 'hello' && 123;   // x = 123
> let y = 'hello' || 123 // y = 'hello'
> ```

Все falsy-значения:
```js
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)     // false
Boolean(false)        // false
```

Остальные значения будут `true`
