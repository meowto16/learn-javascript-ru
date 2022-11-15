// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function createNumberFn(num1) {
  return function(operatorResult = null) {
    if (operatorResult === null) return num1

    const [operator, num2] = operatorResult

    switch (operator) {
      case '+': return num1 + num2
      case '-': return num1 - num2
      case '*': return num1 * num2
      case '/': return Math.floor(num1 / num2)
    }
  }
}

function createOperatorFn(operator) {
  return function(number = null) {
    return [operator, number]
  }
}

const zero = createNumberFn(0)
const one = createNumberFn(1)
const two = createNumberFn(2)
const three = createNumberFn(3)
const four = createNumberFn(4)
const five = createNumberFn(5)
const six = createNumberFn(6)
const seven = createNumberFn(7)
const eight = createNumberFn(8)
const nine = createNumberFn(9)

const plus = createOperatorFn('+')
const minus = createOperatorFn('-')
const times = createOperatorFn('*')
const dividedBy = createOperatorFn('/')