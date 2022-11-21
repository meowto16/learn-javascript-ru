// @ts-check

import Point from './Point.js';
import Segment from './Segment.js';

// BEGIN (write your solution here)
export default function reverse(segment) {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();

  return new Segment(
    new Point(endPoint.getX(), endPoint.getY()),
    new Point(beginPoint.getX(), beginPoint.getY()),
  );
}
// END
