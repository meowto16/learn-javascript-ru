// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

function spiralize(length) {
  const result = Array.from({ length }, () => Array.from({ length }, () => 0))
  spiralLoop(result, (i, j) => result[i][j] = 1)

  return result
}

function spiralLoop(arr, callback) {
  const size = arr.length

  let direction = 'right'
  let i = 0
  let j = 0

  const passed = new Map()

  const setPassed = (i, j) => passed.set(`${i}=${j}`, true)
  const checkPassed = (i, j) => passed.get(`${i}=${j}`) || false

  const checkEnd = () => {
    let around

    if (direction === 'right') {
      around = [
        checkPassed(i - 1, j + 1),
        checkPassed(i + 1, j + 1),
        checkPassed(i, j + 1),
      ]
    }

    if (direction === 'up') {
      around = [
        checkPassed(i - 1, j),
        checkPassed(i - 1, j - 1),
        checkPassed(i - 1, j + 1),
      ]
    }

    if (direction === 'bottom') {
      around = [
        checkPassed(i + 1, j),
        checkPassed(i + 1, j - 1),
        checkPassed(i + 1, j + 1),
      ]
    }

    if (direction === 'left') {
      around = [
        checkPassed(i, j - 1),
        checkPassed(i - 1, j - 1),
        checkPassed(i + 1, j - 1),
      ]
    }

    return around.some(Boolean)
  }

  const checkDirectionChange = () => {
    const touchedBoundary = {
      right: j === size - 1,
      left: j === 0,
      bottom: i === size - 1,
      up: i === 0,
    }

    if (direction === 'right') {
      return touchedBoundary.right
        || checkPassed(i, j + 1)
        || checkPassed(i, j + 2)
    }

    if (direction === 'left') {
      return touchedBoundary.left
        || checkPassed(i, j - 1)
        || checkPassed(i, j - 2)
    }

    if (direction === 'bottom') {
      return touchedBoundary.bottom
        || checkPassed(i + 1, j)
        || checkPassed(i + 2, j)
    }

    if (direction === 'up') {
      return touchedBoundary.up
        || checkPassed(i - 2, j)
        || checkPassed(i - 2, j)
    }
  }

  const directionChange = () => {
    if (direction === 'right') return direction = 'bottom'
    if (direction === 'bottom') return direction = 'left'
    if (direction === 'left') return direction = 'up'
    if (direction === 'up') return direction = 'right'
  }

  const getNewPosition = (i, j, direction) => {
    if (direction === 'right') return [i, j + 1]
    if (direction === 'bottom') return [i + 1, j]
    if (direction === 'left') return [i, j - 1]
    if (direction === 'up') return [i - 1, j]
  }

  const move = () => {
    const needEnd = checkEnd()

    if (needEnd) {
      direction = null
      return
    }

    const needDirectionChange = checkDirectionChange()

    if (needDirectionChange) {
      directionChange()
    }

    setPassed(i, j)
    callback.call(this, i, j)

    const newPosition = getNewPosition(i, j, direction)
    i = newPosition[0]
    j = newPosition[1]
  }

  while (direction) {
    move()
  }

  return arr
}