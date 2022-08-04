/**
 * https://www.codewars.com/kata/525caa5c1bf619d28c000335
 */

function isSolved(b) {
  const EMPTY_MARK = 0
  const X_MARK = 1
  const O_MARK = 2

  const RESULT_NOT_FINISHED = -1
  const RESULT_X_WON = 1
  const RESULT_O_WON = 2
  const RESULT_DRAW = 0

  const row = (num) => b[num]
  const col = (num) => [b[0][num], b[1][num], b[2][num]]
  const diagonal = (direction) => direction === 'left-to-right'
    ? [b[0][0], b[1][1], b[2][2]]
    : [b[0][2], b[1][1], b[2][0]]

  const haveEmptySpaces = () => b.some((row) => row.some((cell) => cell === EMPTY_MARK))
  const checkHorizontal = (num) => [row(0), row(1), row(2)].some((row) => row.every((cell) => cell === num))
  const checkVertical = (num) => [col(0), col(1), col(2)].some((column) => column.every((cell) => cell === num))
  const checkDiagonal = (num) => [diagonal('left-to-right'), diagonal('right-to-left')].some((diagonal) => diagonal.every((cell) => cell === num))

  const checkWon = (mark) => checkHorizontal(mark) || checkVertical(mark) || checkDiagonal(mark)

  if (checkWon(X_MARK)) {
    return RESULT_X_WON
  }

  if (checkWon(O_MARK)) {
    return RESULT_O_WON
  }

  return haveEmptySpaces()
    ? RESULT_NOT_FINISHED
    : RESULT_DRAW
}