// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(floors) {
  const tower = []

  for (let i = 1; i <= floors; i++) {
    const stars = i * 2 - 1;
    const spaces = Math.round((floors) / 2) - stars;

    const floor = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces)
    tower.push(floor)
  }

  return tower;
}