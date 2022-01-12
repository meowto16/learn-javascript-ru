/**
 * Хранение времени прочтения (важность: 5)
 *
 * Есть массив сообщений такой же, как и в предыдущем задании.
 *
 * Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том,
 * когда сообщение было прочитано?
 *
 * В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет».
 * Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
 *
 * P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.
 */

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

const MessagesReadStatusBase = new function () {
  this.map = new WeakMap()
  
  this.readMessage = function (message) {
    return this.map.set(message, new Date())
  }

  this.isMessageRead = function (message) {
    return this.map.has(message)
  }
  
  this.getMessageReadDate = function (message) {
    return this.map.get(message)
  }
}

MessagesReadStatusBase.readMessage(messages[0])
MessagesReadStatusBase.readMessage(messages[1])

MessagesReadStatusBase.isMessageRead(messages[1]) // true
MessagesReadStatusBase.isMessageRead(messages[2]) // false

MessagesReadStatusBase.getMessageReadDate(messages[2]) // undefined
MessagesReadStatusBase.getMessageReadDate(messages[1]) // Date obj...
