function rectangleToSquares(width, height) {
  while (true) {
    if (width < height) height -= width
    if (width > height) width -= height
    if (width === height) break
  }

  return width;
}

const AREA_WIDTH = 1680
const AREA_HEIGHT = 640

const size = rectangleToSquares(AREA_WIDTH, AREA_HEIGHT)
const count = (AREA_WIDTH * AREA_HEIGHT) / size ** 2