// https://www.codewars.com/kata/56f6ad906b88de513f000d96/

function bonusTime(salary, hasBonus) {
  const total = hasBonus ? salary * 10 : salary
  return `£${total}`
}