// @ts-check

// BEGIN (write your solution here)
export default function each(arr, callback) {
  return arr.forEach((element, i, array) => callback.apply(element, [element, i, array]));
}
// END
