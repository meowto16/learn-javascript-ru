/**
 * Проверка логина (важность: 3)
 *
 * Напишите код, который будет спрашивать логин с помощью prompt.
 *
 * Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
 *
 * Пароль проверять так:
 *
 * Если введён пароль «Я главный», то выводить «Здравствуйте!»,
 * Иначе – «Неверный пароль»,
 * При отмене – «Отменено».
 *
 * Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
 * Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''.
 * Нажатие клавиши Esc во время запроса возвращаетn ull.
 */

(() => {
  const ADMIN_NAME = 'Админ'
  const ADMIN_PASSWORD = 'Я Главный'

  const login = prompt('Кто там?', '')

  if (!login) return alert('Отменено')
  if (login !== ADMIN_NAME) return alert('Я вас не знаю')

  const password = prompt('Пароль?')

  if (!password) return alert('Отменено')
  if (password !== ADMIN_PASSWORD) return alert('Неверный пароль')

  return alert('Здравствуйте!')
})()

// Или с вложенными if'ами и хардкодом...:

const login = prompt('Кто там?', '')

if (login) {
  if (login === 'Админ') {
    const password = prompt('Пароль?', '')

    if (password) {
      if (password === 'Я Главный') {
        alert('Здравствуйте!')
      } else {
        alert('Неверный пароль')
      }
    } else {
      alert('Отменено')
    }
  } else {
    alert('Я вас не знаю')
  }
} else {
  alert('Отменено')
}






