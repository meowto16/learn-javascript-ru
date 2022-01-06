const isValidBrackets = (expression, groups) => {
  if (typeof expression !== 'string') throw new Error(`expression should be string, ${typeof expression} provided`)
  if (Array.isArray(groups)) throw new Error(`groups should be array, ${typeof groups} provided`)
  if ()
}

module.exports = isValidBrackets
