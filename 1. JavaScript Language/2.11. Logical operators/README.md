# Логические операторы

Логические операторы в JS это 
- `||`, логическое ИЛИ (сложение), дизъюнкция
- `&&`, логическое И (умножение), конъюнкция
- `!`, логическое отрицание, инверсия

## Логическое ИЛИ (||)

Возвращает `true`, если хотя бы один из операндов является `true`.

> Если значение не логического типа, то оно к нему приводится в целях вычислений.

- Находит первое **истинное** значение
  - Вычисляет операнды слева направо.
  - Каждый операнд конвертирует в логическое значение. Если результат `true`, останавливается
  и возвращает исходное значение этого операнда
  - Если все операнды являются ложными, возвращает последний.

## Логическое И (&&)

Возвращает `true`, если оба операнда являются `true`

- Находит первое **ложное** значение
  - Вычисляет операнды слева направо.
  - Каждый операнд конвертирует в логическое значение. Если результат `false`, останавливается
  и возвращает исходное значение этого операнда
  - Если все операнды были истинными, возвращает последний.

> Не стоит забывать, что приоритет у `&&` больше, чем у `||`

## Логическое НЕ (!)

Оператор принимает один операнд, т.е является унарным, и выполняет следующие действия:

1. Сначала приводит аргумент к логическому типу `true/false`
2. Затем возвращает противоположное значение

> Часто используется, чтобы привести переменную к логическому типу,
> двойное отрицание:
> 
> ```js
> let x = 0
> !x // true
> !!x // false
> ```