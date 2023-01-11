// https://www.codewars.com/kata/58885a7bf06a3d466e0000e3

function pairOfShoes(shoes) {
  const LEFT_SHOE = 0
  const RIGHT_SHOE = 1

  const sizes = {}

  for (const [type, size] of shoes) {
    if (!sizes[size]) {
      sizes[size] = {}
    }

    sizes[size][type] = (sizes[size][type] || 0) + 1
  }

  for (const [size, types] of Object.entries(sizes)) {
    const leftShoesCount = types[LEFT_SHOE]
    const rightShoesCount = types[RIGHT_SHOE]

    if (leftShoesCount !== rightShoesCount) {
      return false
    }
  }

  return true
}