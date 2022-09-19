// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
  const multiplies = []
  let multiply = integer

  while (multiply <= limit) {
    multiplies.push(multiply)
    multiply += integer;
  }

  return multiplies
}
