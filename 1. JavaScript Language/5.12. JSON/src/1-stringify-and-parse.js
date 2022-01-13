/**
 * Преобразуйте объект в JSON, а затем обратно в обычный объект (важность: 5)
 */

let user = {
  name: "Василий Иванович",
  age: 35
};

const json = JSON.stringify(user)
const parsedJson = JSON.parse(json)
