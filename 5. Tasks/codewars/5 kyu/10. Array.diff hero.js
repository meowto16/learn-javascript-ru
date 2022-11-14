// https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8

function arrayDiffVeryFast(a, b) {
  const valuesFromSecondMap = b.reduce((acc, cur) => {
    acc[cur] = true
    return acc
  }, {})
  const notExistsInSecond = value => !valuesFromSecondMap[value]

  return a.filter(notExistsInSecond)
}