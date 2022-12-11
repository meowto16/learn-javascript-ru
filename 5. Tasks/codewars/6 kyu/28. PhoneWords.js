function phoneWords(stringOfNums) {
  const buttons = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '0': ' '
  }

  return stringOfNums.replace(
    /([0]+)|([1]+)|([2]+)|([3]+)|([4]+)|([5]+)|([6]+)|([7]+)|([8]+)|([9]+)/g,
    (group) => {
      const button = group[0]
      const buttonKeys = buttons[button]

      if (!buttonKeys) return ''

      const chunks = []
      const chunkSize = buttonKeys.length

      for (let i = 0; i < group.length; i += chunkSize) {
        const chunk = group.slice(i, i + chunkSize);
        chunks.push(chunk);
      }

      return chunks.map(chunk => buttonKeys[chunk.length - 1]).join('')
    }
  )
}