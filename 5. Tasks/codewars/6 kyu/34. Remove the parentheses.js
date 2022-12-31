function removeParentheses(sentence) {
  let depth = 0
  let result = ''

  for (const char of sentence) {
    if (char === '(') depth++;
    if (char === ')') depth--;
    if (depth === 0 && char !== ')' && char !== '(') result += char;
  }

  return result
}