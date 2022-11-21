// @ts-check

// BEGIN (write your solution here)
export default class Point {
  #x = null;

  #y = null;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }
}
// END
