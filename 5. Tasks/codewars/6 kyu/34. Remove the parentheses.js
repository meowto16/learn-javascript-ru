function removeParentheses(sentence){
  const OPEN_TOKEN = '('
  const CLOSE_TOKEN = ')'
  const pairs = []

  let depth = 0
  let indexesByDepth = {}

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i]

    if (char === OPEN_TOKEN) {
      depth++;
      indexesByDepth[depth] = i;
    }

    if (char === CLOSE_TOKEN && depth > 0) {
      const start = indexesByDepth[depth]
      const end = i;

      if (start >= 0 && end >= 0) {
        const pair = [start, end];
        pairs.push(pair)
      }

      depth--;
    }
  }

  return sentence
    .split('')
    .map((char, idx) => {
      const needToDelete = pairs.some(([start, end]) => idx >= start && idx <= end)

      return needToDelete ? null : char
    })
    .filter(Boolean)
    .join('')
}