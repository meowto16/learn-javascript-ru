/**
 * Создание калькулятора при помощи конструктора (важность: 5)
 *
 * Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
 * read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
 * sum() возвращает сумму введённых свойств.
 * mul() возвращает произведение введённых свойств.
 *
 * Например:
 * let calculator = new Calculator();
 * calculator.read();
 *
 * alert( "Sum=" + calculator.sum() );
 * alert( "Mul=" + calculator.mul() );
 */

const Calculator = function() {
  this.param1 = null
  this.param2 = null
  
  this.read = function() {
    this.param1 = +prompt('Введите первое число', '0')
    this.param2 = +prompt('Введите второе число', '0')
  }
  
  this.sum = function() {
    return this.param1 + this.param2
  }
  
  this.mul = function() {
    return this.param1 * this.param2
  }
}

const calculator = new Calculator()
calculator.read()

alert( "Sum=" + calculator.sum() )
alert( "Mul=" + calculator.mul() )

