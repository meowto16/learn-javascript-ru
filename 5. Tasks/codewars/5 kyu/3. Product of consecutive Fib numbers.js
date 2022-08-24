/**
 * https://www.codewars.com/kata/5541f58a944b85ce6d00006a/javascript
 */
function productFib(prod){
  const fibo = [0, 1]
  let next = 1;
  let idx = 0;

  while (next < Number.MAX_SAFE_INTEGER) {
    next = fibo[idx] + fibo[idx + 1]
    fibo.push(next)
    idx++
  }

  for (let i = 0; i < fibo.length; i++) {
    const left = fibo[i]
    const right = fibo[i + 1]

    const mult = left * right

    if (mult === prod) {
      return [left, right, true]
    }

    if (mult > prod) {
      return [left, right, false]
    }
  }

  return null;
}