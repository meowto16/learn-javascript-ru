# Примеси

Примесь - это класс, методы которого нужны для использования в других классах, без наследования.

Пример примеси:
```js
const sayHiMixin = {
  sayHi() {
    alert(`Привет, ${this.name}`);
  },
  sayBye() {
    alert(`Пока, ${this.name}`);
  }
}

class User {
  constructor(name) {
    this.name = name
  }
}

Object.assing(User.prototype, sayHiMixin)

new User("Вася").sayHi()
```

Это не наследование, а просто копирование методов. Миксины можно наследовать.

```js
let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin, // (или мы можем использовать Object.create для задания прототипа)

  sayHi() {
    // вызываем метод родителя
    super.say(`Привет, ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Пока, ${this.name}`); // (*)
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!
```

JS не поддерживает множественное наследование, но с помощью миксинов можно реализовать нечто похожее.
