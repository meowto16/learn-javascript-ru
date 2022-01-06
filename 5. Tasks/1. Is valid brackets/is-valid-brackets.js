const isValidBrackets = (expression, groups) => {
  if (typeof expression !== 'string') {
    throw new Error(`expression should be string, ${typeof expression} provided`)
  }
  if (expression === '') return true

  if (!Array.isArray(groups)) {
    throw new Error(`groups should be array, ${typeof groups} provided`)
  }
  if (groups.length === 0 || groups.some(group => typeof group !== 'string' || group.length !== 2)) {
    throw new Error(`groups should be array of tuple-strings. Example: ['[]', '()', '{}'] etc...`)
  }

  const CLOSE_BRACKET_TYPE = 'CLOSE_BRACKET'
  const OPEN_BRACKET_TYPE = 'OPEN_BRACKET'
  const UNKNOWN_BRACKET_TYPE = 'UNKNOWN_BRACKET'

  const stack = []

  const pairMap = groups.reduce((acc, [openBracket, closeBracket]) => {
    acc[OPEN_BRACKET_TYPE][openBracket] = closeBracket
    acc[CLOSE_BRACKET_TYPE][closeBracket] = openBracket
    return acc
  }, { [OPEN_BRACKET_TYPE]: {}, [CLOSE_BRACKET_TYPE]: {} })
  
  for (const bracket of expression) {
    const [pairBracket, type] = (() => {
      if (pairMap[OPEN_BRACKET_TYPE][bracket]) return [pairMap[OPEN_BRACKET_TYPE][bracket], OPEN_BRACKET_TYPE]
      if (pairMap[CLOSE_BRACKET_TYPE][bracket]) return [pairMap[CLOSE_BRACKET_TYPE][bracket], CLOSE_BRACKET_TYPE]

      return [null, UNKNOWN_BRACKET_TYPE]
    })()
    
    switch (type) {
      case UNKNOWN_BRACKET_TYPE:
      default:
        throw new Error(`unknown bracket "${bracket}". Known groups of chars: ${groups.join(' ')}`)
      case OPEN_BRACKET_TYPE:
        stack.push(pairBracket)
        break;
      case CLOSE_BRACKET_TYPE:
        if (stack.length === 0) return false
        if (stack[stack.length - 1] !== bracket) return false

        stack.pop()
        break;
    }
  }

  return stack.length === 0
}

module.exports = isValidBrackets
