/**
 * Finally или просто код?
 * Сравните два фрагмента кода.
 *
 * Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.
 *
 * Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы?
 * Если такое преимущество есть, то дайте пример, когда оно проявляется.
 */

// 1
try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
} finally {
  очистить рабочее пространство
}

// 2

try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
}

очистить рабочее пространство

// Решение: я думаю код одинаково будет работать
// отличие будет только если код выйдет из try..catch, например при помощи return в функции. Или будет проброс ошибки.