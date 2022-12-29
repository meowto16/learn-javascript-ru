// https://www.codewars.com/kata/52f831fa9d332c6591000511

const REGEX_DEEP_EXPRESSION = /.+(?<openBracket>[{(\[])(?<expression>[^\]})]+)(?<closeBracket>[\])}])(?<bracketIndex>\d+)?/
const REGEX_ELEMENTS = /((?<elementName>[A-Z][a-z]*)(?<elementIndex>\d*)?)/g

function parseMolecule(formula) {
  let deepMatch = null

  while (deepMatch = formula.match(REGEX_DEEP_EXPRESSION)) {
    const { expression, bracketIndex = 1, openBracket, closeBracket } = deepMatch.groups
    const multipliedExpression = multiplyExpression(expression, +bracketIndex)
    const startIdx = deepMatch.input.lastIndexOf(openBracket)
    const endIdx = deepMatch.index + deepMatch[0].length

    formula = [
      formula.slice(0, startIdx),
      multipliedExpression,
      formula.slice(endIdx, formula.length)
    ].join('')
  }

  return expressionIntoMolecules(formula)
}

function multiplyExpression(expression, multiplyIdx = 1) {
  let resultExpression = ''

  for (let element of expression.matchAll(REGEX_ELEMENTS)) {
    const { elementName, elementIndex = 1 } = element.groups
    const calculatedIdx = elementIndex * multiplyIdx

    resultExpression += `${elementName}${calculatedIdx > 1 ? calculatedIdx : ''}`
  }

  return resultExpression
}

function expressionIntoMolecules(expression) {
  const molecules = {}

  for (let element of expression.matchAll(REGEX_ELEMENTS)) {
    const { elementName, elementIndex = 1 } = element.groups

    molecules[elementName] = (molecules[elementName] || 0) + +elementIndex
  }

  return molecules
}