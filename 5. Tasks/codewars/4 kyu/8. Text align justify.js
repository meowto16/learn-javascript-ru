// https://www.codewars.com/kata/537e18b6147aa838f600001b

/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
const justify = function(str, justifyLength) {
  const words = [...str.split(' ')].filter(Boolean)
  const lines = words.reduce((acc, word) => {
    const row = acc[acc.length - 1]
    const rowLength = row.join('').length + row.length - 1

    if (rowLength + word.length + 1 <= justifyLength) {
      row.push(word)
    } else {
      acc.push([word])
    }

    return acc
  }, [[]])
  const linesJustified = lines.map((line, idx, lines) => {
    const lineLength = line.join('').length
    const spacesCount = line.length - 1
    const spaceSize = (justifyLength - lineLength) / spacesCount

    const isLastLine = idx === lines.length - 1
    const containsOnlyOneWord = line.length === 1
    const needJustify = !isLastLine && !containsOnlyOneWord

    if (!needJustify) {
      return line.join(' ')
    }

    if (Number.isInteger(spaceSize)) {
      return line.join(' '.repeat(spaceSize))
    }

    const bigSpaceSize = Math.ceil(spaceSize)
    const smallSpaceSize = Math.floor(spaceSize)

    console.log({
      line,
      spaceSize,
      bigSpaceSize,
      smallSpaceSize,
      spacesCount,
      lineLength,
    })

    const bigSpace = ' '.repeat(bigSpaceSize)
    const smallSpace = ' '.repeat(smallSpaceSize)

    for (let i = 1; i <= spacesCount; i++) {
      const leftPart = line.slice(0, -i).join(bigSpace)
      const rightPart = line.slice(-i).join(smallSpace)

      const result = [leftPart, rightPart].join(smallSpace)

      if (result.length <= justifyLength) {
        return result
      }
    }

    return line.join(' ')
  })

  return linesJustified.join('\n')
};