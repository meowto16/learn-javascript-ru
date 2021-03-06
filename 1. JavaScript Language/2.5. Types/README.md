# Типы данных

JS является динамически типизированным языком. Это значит, что в переменных может быть в один момент времени, например,
строка, а в другой момент времени - число.

На данный момент в JS есть 8 основных типов данных:

- `undefined`
  - Означает «значение не было присвоено».
  - для проверок, была ли переменная назначена.
  - `typeof` вернет `'undefined'`
- `null`
  - Означает «ничего», «пусто» или «значение неизвестно».
  - для проверок, является ли переменная пустой
  - `typeof` вернет `'object'`.
    - Это баг, раньше в первых версиях JS, значения представлялись как `type tag` и `value`.
    - У объекта `type tag` был 0.
    - `null` был представлен как нулевой указатель, соответственно тоже стал иметь `type tag` = 0
- `string`
  - для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
- `boolean`
  - для true/false
- `number`
  - Специальные числовые значения:
    - `Infinity` - математическая бесконечность. Больше любого числа
    - `-Infinity` - отрицательная математическая бесконечность. Меньше любого числа
    - `NaN` - вычислительная ошибка.
      - Любая операция с `NaN` возвращает `NaN`
      - `NaN` не равен `NaN`
- `bigint`
  - Для целых чисел произвольной длины
  - В JS `number` не может содержать в себе числа больше `2^53`, или меньше чем `-(2^53 - 1)`
  - Позволяет работать с числами произвольной длины
- `symbol`
  - Для уникальных идентификаторов
- `object`
  - Для сложных структур данных
