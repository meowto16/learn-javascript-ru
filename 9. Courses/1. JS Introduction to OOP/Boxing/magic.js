// @ts-check
// BEGIN (write your solution here)
const sum = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0)

function magic(...numbers) {
  const inner = (...numbers) => {
    const accumulated = inner.valueOf();
    inner.valueOf = () => sum(accumulated, ...numbers);

    return inner;
  }

  inner.valueOf = () => sum(...numbers);

  return inner;
}

magic.valueOf = () => 0;

export default magic;
// END
