# Proxy и Reflect

## Proxy

`Proxy` - используется для перехвата действий совершаемых с объектом при помощи "ловушек".
Ловушки есть такие:

- `get` - чтение свойства
- `set` - запись свойства
- `has` - оператор `in`
- `deleteProperty` - оператор `delete`
- `apply` - вызов функции
- `construct` - оператор `new`
- `getPrototypeOf` - Object.getPrototypeOf 
- `setPrototypeOf`- Object.setPrototypeOf
- `isExtensible` - Object.isExtensible
- `preventExtensions` - Object.preventExtensions
- `defineProperty` - Object.defineProperty, Object.defineProperties
- `getOwnPropertyDescriptor` - Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
- `ownKeys` - Object.getOwnPropertyNames, Object.getOwnPropertyNames, 
  Object.getOwnPropertySymbols, for..in, Object.keys/values/entries

Наиболее полезный пример, который охватывает несколько кейсов:

```js
let user = {
  name: "Вася",
  _password: "***"
};

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error("Отказано в доступе");
    } else {
      let value = target[prop];
      return (typeof value === 'function') ? value.bind(target) : value; // (*)
    }
  },
  set(target, prop, val) { // перехватываем запись свойства
    if (prop.startsWith('_')) {
      throw new Error("Отказано в доступе");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) { // перехватываем удаление свойства
    if (prop.startsWith('_')) {
      throw new Error("Отказано в доступе");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) { // перехватываем попытку итерации
    return Object.keys(target).filter(key => !key.startsWith('_'));
  },
  has(target, prop) { // перехватываем для in оператора
    return prop.startsWith('_')
        ? false
        : prop in target
  }
});

// "get" не позволяет прочитать _password
try {
  alert(user._password); // Error: Отказано в доступе
} catch(e) { alert(e.message); }

// "set" не позволяет записать _password
try {
  user._password = "test"; // Error: Отказано в доступе
} catch(e) { alert(e.message); }

// "deleteProperty" не позволяет удалить _password
try {
  delete user._password; // Error: Отказано в доступе
} catch(e) { alert(e.message); }

// "ownKeys" исключает _password из списка видимых для итерации свойств
for(let key in user) alert(key); // name
```

Интересный способ обертки `delay`, чтобы не терять доступа к свойствам `

```js
function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}

function sayHi(user) {
  alert(`Привет, ${user}!`);
}

sayHi = delay(sayHi, 3000);

alert(sayHi.length); // 1 (*) прокси перенаправляет чтение свойства length на исходную функцию

sayHi("Вася"); // Привет, Вася! (через 3 секунды)
```

## Reflect

`Reflect` - упрощает работу с `Proxy`. Позволяет перенаправлять действия обратно на объект, т.е
вызывать внутренние методы вроде `[[Get]]`, `[[Set]]`

## Ограничения Proxy

Прокси имеют некоторые ограничения:

- Встроенные объекты используют так называемые «внутренние слоты», 
  доступ к которым нельзя проксировать. Но можно обойти это ограничение
- То же самое можно сказать и о приватных полях классов, так как они реализованы на основе 
  слотов. То есть вызовы проксированных методов должны иметь оригинальный объект в качестве `this`, 
  чтобы получить к ним доступ.
- Проверка объектов на строгое равенство `===` не может быть перехвачена.
- Производительность: конкретные показатели зависят от интерпретатора, 
  но в целом получение свойства с помощью простейшего прокси занимает в несколько раз 
  больше времени. В реальности это имеет значение только для некоторых «особо нагруженных» 
  объектов.

