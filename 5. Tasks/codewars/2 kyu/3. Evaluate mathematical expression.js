const expressionCalc = (leftOperand, operator, rightOperand) => {
  leftOperand = Number(leftOperand)
  rightOperand = Number(rightOperand)

  switch (operator) {
    case '*': return leftOperand * rightOperand
    case '/': return leftOperand / rightOperand
    case '+': return leftOperand + rightOperand
    case '-': return leftOperand - rightOperand
  }
}

const calc = function (expression) {
  expression = expression.replace(/\s{1,}/g, '')
  expression = expression.replace(/[\*\/\+\-]?\-\-/, (found) => {
    if (found.length === 2) return '+'
    if (found.length === 3) return found[0]
  })
  const REGEX = {
    LEFT_OPERAND: String.raw`(?<leftOperand>\-?\d+(\.\d+)?)`,
    RIGHT_OPERAND: String.raw`(?<rightOperand>\-?\d+(\.\d+)?)`,
    MULTIPLY_OPERATOR: String.raw`(?<operator>\*)`,
    DIVISION_OPERATOR: String.raw`(?<operator>\/)`,
    ADDITION_OPERATOR: String.raw`(?<operator>\+)`,
    SUBTRACTION_OPERATOR: String.raw`(?<operator>\-)`,
  }

  const createOperatorStrategy = (regexOperator) => {
    return (expression) => {
      const regex = new RegExp(REGEX.LEFT_OPERAND + regexOperator + REGEX.RIGHT_OPERAND, 'g')
      const result = regex.exec(expression)

      if (!result) return null

      const start = result.index
      const end = result.index + result[0].length
      const foundExpression = result[0]
      const { groups: { leftOperand, rightOperand, operator } } = result

      return {
        start,
        end,
        expression: expression.slice(start, end),
        withCalculated: (result) => expression.slice(0, start) + `${result}` + expression.slice(end, expression.length),
        calculate: () => expressionCalc(leftOperand, operator, rightOperand)
      }
    }
  }

  const strategy = {
    parentheses: (expression) => {
      const start = expression.lastIndexOf('(')
      const end = expression.slice(0, start).length + expression.slice(start).indexOf(')')

      if (start === -1 || end === -1) return null

      const foundExpression = expression.slice(start + 1, end)

      return {
        start,
        end,
        expression: foundExpression,
        withCalculated: (result) => expression.slice(0, start) + `${result}` + expression.slice(end + 1, expression.length),
        calculate: () => calc(foundExpression),
      }
    },
    multiplication: createOperatorStrategy(REGEX.MULTIPLY_OPERATOR),
    division: createOperatorStrategy(REGEX.DIVISION_OPERATOR),
    addition: createOperatorStrategy(REGEX.ADDITION_OPERATOR),
    subtraction: createOperatorStrategy(REGEX.SUBTRACTION_OPERATOR),
    getResult: (expression) => {
      return {
        start: 0,
        end: expression.length - 1,
        expression,
        calculate: () => Number(expression),
        withCalculated: (calculated) => Number(calculated)
      }
    }
  }

  const precendence = [
    strategy.parentheses,
    [strategy.multiplication, strategy.division],
    [strategy.subtraction, strategy.addition],
    strategy.getResult
  ]

  for (const strategy of precendence) {
    const result = Array.isArray(strategy)
      ? strategy
        .map((exec) => exec(expression))
        .filter(Boolean)
        .sort((a, b) => a.start - b.start)
        ?.[0]
      : strategy(expression)

    if (result) {
      const calculateResult = result.calculate()
      const withCalculated = result.withCalculated(calculateResult)

      if (strategy.name === 'getResult') return withCalculated

      return calc(withCalculated)
    }
  }
};