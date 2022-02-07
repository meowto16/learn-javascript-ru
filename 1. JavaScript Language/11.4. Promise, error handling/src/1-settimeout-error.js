/**
 * Ошибка в setTimeout
 *
 * Что вы думаете? Выполнится ли .catch? Поясните свой ответ.
 */

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// Решение: нет, не выполнится. Скрытый try..catch обрабатывает только синхронный код, а ошибка генерится асинхронно.
