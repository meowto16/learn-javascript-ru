/**
 * https://www.codewars.com/kata/520446778469526ec0000001/javascript
 */
Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) {
    return false;
  }

  for (let key in this) {
    const isPrimitives = !Array.isArray(this[key]) && !Array.isArray(other[key])
    const isArrays = Array.isArray(this[key]) && Array.isArray(other[key])

    if (!isPrimitives && !isArrays) {
      return false
    }

    if (isPrimitives) {
      continue;
    }

    const checkNested = this[key].sameStructureAs(other[key])

    if (!checkNested) {
      return false
    }
  }

  return true;
};