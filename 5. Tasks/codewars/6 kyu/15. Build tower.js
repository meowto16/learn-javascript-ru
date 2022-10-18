// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

const towerBuilder = floors => Array.from({ length: floors }, (_, i) => {
  const spaces = floors - 1 - i;
  const stars = 1 + (i * 2);

  return ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces)
})
