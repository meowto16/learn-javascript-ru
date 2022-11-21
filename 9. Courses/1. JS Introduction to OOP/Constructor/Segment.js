// @ts-check

// BEGIN (write your solution here)
export default class Segment {
  #beginPoint = null;

  #endPoint = null;

  constructor(beginPoint, endPoint) {
    this.#beginPoint = beginPoint;
    this.#endPoint = endPoint;
  }

  getBeginPoint() {
    return this.#beginPoint;
  }

  getEndPoint() {
    return this.#endPoint;
  }
}
// END
