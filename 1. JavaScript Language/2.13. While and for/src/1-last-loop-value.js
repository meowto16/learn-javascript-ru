/**
 * Последнее значение цикла (важность: 3)
 *
 * Какое последнее значение выведет этот код? Почему?
 */

let i = 3;

while (i) {
  alert( i-- );
}

/**
 * Решение:
 * Выведет 3, 2, 1. Последнее значение - 1
 *
 * Когда i станет 0, это falsy-значение
 */
