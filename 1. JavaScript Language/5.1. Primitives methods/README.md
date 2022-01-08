# Методы примитивов

Как ранее говорилось, в JS есть 7 примитивных типов:

- `undefined` - не имеет обертки
- `null` - не имеет обертки
- `boolean` - имеет обертку `Boolean`
- `string` - имеет обертку `String`
- `number` - имеет обертку `Number`
- `bigint` - имеет обертку `BigInt`
- `symbol` - имеет обертку `Symbol`

И последний тип - это объект.

При обращении к свойствам, методам примитива, создается специальная обертка, которая имеет значение 
примитива и полезные методы/свойства. 

Проверить можно через:

```js
(5).constructor //  Number() { [native code] }
(5n).constructor //  BigInt() { [native code] }
('asd').constructor // String() { [native code] }
(Symbol()).constructor // Symbol() { [native code] }
(true).constructor // Boolean() { [native code] }
```

**Важно:**

> Конструкторы примитивов предназначены только для внутреннего использования.
> 
> Последствия могут быть непредсказуемыми:
> ```js
> alert( typeof 0 ); // "число"
> 
> alert( typeof new Number(0) ); // "object"!
> ```
> 
> Или:
> ```js
> let zero = new Number(0);
> 
> if (zero) {
> // zero возвращает "true", так как является объектом
> alert( "zero имеет «истинное» значение?!?" );
> }
> ```

Что касается `null`/`undefined`, то они не имеют методов
