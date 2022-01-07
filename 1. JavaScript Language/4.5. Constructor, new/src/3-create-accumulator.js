/**
 * Создаём Accumulator (важность: 5)
 *
 * Напишите функцию-конструктор Accumulator(startingValue).
 *
 * Объект, который она создаёт, должен уметь следующее:
 *
 * Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
 * Метод read() использует prompt для получения числа и прибавляет его к свойству value.
 * Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
 *
 * Ниже вы можете посмотреть работу кода:
 *
 * let accumulator = new Accumulator(1); // начальное значение 1
 *
 * accumulator.read(); // прибавит ввод prompt к текущему значению
 * accumulator.read(); // прибавит ввод prompt к текущему значению
 *
 * alert(accumulator.value); // выведет сумму этих значений
 */

const Accumulator = function(startingValue) {
  this.value = +startingValue
  this.read = function() {
    const input = +prompt('Введите число, которое хотите прибавить', '0')
    this.value += input
  }
}

const accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
console.log(accumulator.value)
