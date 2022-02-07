/**
 * Промисы: сравните then и catch
 *
 * Являются ли фрагменты кода ниже эквивалентными?
 * Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?
 */

promise.then(f1).catch(f2);

promise.then(f1, f2);

// Решение: не совсем, в первом случае ошибка может возникнуть и в .then(f1) - тогда она поймается в .catch(f2)
// Во втором случае, ошибка может быть только в самом промисе.