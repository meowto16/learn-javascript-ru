// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values){
  const uniques = [...new Set(values)]

  return +uniques.sort((a, b) => a - b).join('')
}