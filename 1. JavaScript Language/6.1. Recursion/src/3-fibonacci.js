/**
 * Числа Фибоначчи (важность: 5)
 *
 * Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть,
 * следующее число получается как сумма двух предыдущих.
 * Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
 * Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
 * Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
 * Пример работы:
 */

function fibonacci(n) {
  const numbers = [1, 1]
  if (n <= 2) return numbers[n]
  
  for (let i = 3; i <= n; i++) {
    const first = numbers[numbers.length - 1]
    const second = numbers[numbers.length - 2]
    numbers.push(first + second)
  }
  
  return numbers[numbers.length - 1]
}

module.exports = fibonacci
