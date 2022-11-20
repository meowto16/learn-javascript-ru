// https://www.codewars.com/kata/536950ffc8a5ca9982001371

function solution(arr) {
  const MAX_JUMPS = 10_000;

  let idx = 0
  let jumps = 0

  while (idx >= 0 && idx < arr.length) {
    if (jumps >= MAX_JUMPS) {
      return -1;
    }

    idx += arr[idx];
    jumps++;
  }

  return jumps
}