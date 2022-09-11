function rectangleToSquares(width, height) {
  if (width === height) {
    return width;
  }

  return width < height
    ? rectangleToSquares(width, height - width)
    : rectangleToSquares(width - height, height)
}

const AREA_WIDTH = 1680
const AREA_HEIGHT = 640

const size = rectangleToSquares(AREA_WIDTH, AREA_HEIGHT)
const count = (AREA_WIDTH * AREA_HEIGHT) / size ** 2