// BEGIN
const f = (...numbers) => {
  const sum = numbers.reduce((acc, x) => (x + acc), 0);
  const inner = (...rest) => f(sum, ...rest);
  // функции - это объекты, что позволяет для "магического" метода установить свою функцию
  inner.valueOf = () => sum; // метод вызывается при сравнении, поэтому он возвращает только результат
  // подробнее о valueOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
  return inner;
};

export default f;
// END