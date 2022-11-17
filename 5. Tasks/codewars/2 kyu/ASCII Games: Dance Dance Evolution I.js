// https://www.codewars.com/kata/58f58dc3663082a4ba000033

function dance(map) {
  map = map.split('\n').map(row => row.split(''))
  if (!map.length) {
    return '';
  }

  const directions = '←↖↑↗→↘↓↙'.split('');
  const oppositeDirections = {
    '←': '→',
    '↖': '↘',
    '↑': '↓',
    '↗': '↙',
    '→': '←',
    '↘': '↖',
    '↓': '↑',
    '↙': '↗',
  };

  const startRowIdx = map.findIndex(row => row.includes('S'))
  const startColumnIdx = map[startRowIdx].findIndex(column => column === 'S')
  const startCoords = [startRowIdx, startColumnIdx]

  function getNextMoveCoordinates(direction, [i, j]) {
    const directionToCoordinates = {
      '↑': (i, j) => [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
      ],
      '↗': (i, j) => [
        [i - 1, j],
        [i - 1, j + 1],
        [i, j + 1],
      ],
      '→': (i, j) => [
        [i, j + 1]
      ],
      '↘': (i, j) => ([i + 1, j + 1]),
      '↓': (i, j) => ([i + 1, j]),
      '↙': (i, j) => ([i + 1, j - 1]),
      '←': (i, j) => ([i, j - 1]),
      '↖': (i, j) => ([i - 1, j - 1]),
    }

    const coordinates = directionToCoordinates[direction](i, j)
    const outOfBoundaries = coordinates.some(point => point < 0 || point > map[0].length - 1);

    return outOfBoundaries ? [] : coordinates;
  }

  function findLongestRecursive(currentDirection, coordinates, passedCoordinatesTail = []) {
    const passedCoordinates = [...passedCoordinatesTail, [...coordinates, currentDirection]]

    const nextMoveCoordinates
      = getNextMoveCoordinates(currentDirection, coordinates);
    const [nextX, nextY] = nextMoveCoordinates
    const nextMoveDirection = map[nextX] && map[nextX][nextY];

    const isPassedNextMoveCoordinate = Boolean(passedCoordinates.find(([passedX, passedY]) => {
      return passedX === nextX && passedY === nextY;
    }));
    const isNextMoveOpposite = oppositeDirections[currentDirection] === nextMoveDirection;
    const isNextMovePossible = nextMoveCoordinates && !isPassedNextMoveCoordinate && !isNextMoveOpposite;

    if (!isNextMovePossible) {
      return passedCoordinates;
    }

    return findLongestRecursive(nextMoveDirection, nextMoveCoordinates, passedCoordinates);
  }

  const longestVariants = directions
    .map((direction) => findLongestRecursive(direction, startCoords))
    .sort((a, b) => b.length - a.length)

  console.log(longestVariants)

  const longestVariant = longestVariants[0]
  const longestVariantMove = longestVariant.map(([x, y, direction]) => direction).join('')

  return longestVariantMove
}