function max(...args) {
  const flatten = args.map((arg) => {
    return Array.isArray(arg)
      ? max(...arg.flat())
      : +arg
  })

  let maxValue = flatten[0] || 0

  for (const number of flatten) {
    if (Number.isNaN(number)) {
      return NaN
    }

    maxValue = maxValue > number ? maxValue : number
  }

  return maxValue
}

function min(...args) {
  const flatten = args.map((arg) => {
    return Array.isArray(arg)
      ? min(...arg.flat())
      : +arg
  })

  let minValue = flatten[0] || 0

  for (const number of flatten) {
    if (Number.isNaN(number)) {
      return NaN
    }

    minValue = minValue < number ? minValue : number
  }

  return minValue
}