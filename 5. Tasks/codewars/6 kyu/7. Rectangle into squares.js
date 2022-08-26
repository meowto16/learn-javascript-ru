/**
 * https://www.codewars.com/kata/55466989aeecab5aac00003e/
 */
function sqInRect(length, width){
  if (length === width) return null;

  const result = []

  const rectangle = {
    length,
    width,
    get area() {
      return this.length * this.width;
    }
  }

  while (rectangle.area > 0) {
    const square = {
      side: Math.min(rectangle.length, rectangle.width),
    }

    if (rectangle.length > rectangle.width) {
      rectangle.length -= square.side
    } else if (rectangle.length < rectangle.width) {
      rectangle.width -= square.side
    } else {
      rectangle.length -= square.side
      rectangle.width -= square.side
    }

    result.push(square.side)
  }

  return result
}