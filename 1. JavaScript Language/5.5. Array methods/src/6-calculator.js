/**
 * Создать расширяемый калькулятор
 * Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
 * Задание состоит из двух частей.
 * Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
 * «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
 * Пример использования:
 * Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
 *
 * let calc = new Calculator;
 *
 * alert( calc.calculate("3 + 7") ); // 10
 *
 * let powerCalc = new Calculator;
 * powerCalc.addMethod("*", (a, b) => a * b);
 * powerCalc.addMethod("/", (a, b) => a / b);
 * powerCalc.addMethod("**", (a, b) => a ** b);
 *
 * Для этой задачи не нужны скобки или сложные выражения.
 * Числа и оператор разделены ровно одним пробелом.
 * Не лишним будет добавить обработку ошибок.
 *
 * let result = powerCalc.calculate("2 ** 3");
 * alert( result );
 *
 * Например, давайте добавим умножение *, деление / и возведение в степень **:
 */

const Calculator = function () {
  this.operatorLogicMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }
  
  this.calculate = function (expression) {
    const operator = Object
      .keys(this.operatorLogicMap)
      .sort((a, b) => b.length - a.length)
      .find(operator => expression.includes(operator))
    
    if (!operator) throw new Error('Unknown operator')
    
    const [a, b] = expression.split(operator).map(operand => +operand.trim())
    
    return this.operatorLogicMap[operator](a, b)
  }

  this.addMethod = function (operator, calculateLogic) {
    this.operatorLogicMap[operator] = calculateLogic
  }
}

const calculator = new Calculator()

calculator.addMethod('*', (a, b) => a * b)
calculator.addMethod('/', (a, b) => a / b)
calculator.addMethod('**', (a, b) => a ** b)

const result = calculator.calculate("2 ** 3")

console.log(result)
