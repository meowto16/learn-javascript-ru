// @ts-check
// BEGIN (write your solution here)
const sum = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0)

function magic(...numbers) {
  const accumulated = sum(...numbers);

  const inner = (...numbers) => {
    const innerAccumulated = sum(...numbers);
    const innerClone = inner.bind(null, innerAccumulated);

    innerClone.valueOf = () => innerAccumulated;

    return innerClone;
  }

  const clone = inner.bind(null, accumulated);
  clone.valueOf = () => accumulated;

  return clone;
}

magic.valueOf = () => 0;

export default magic;
// END
