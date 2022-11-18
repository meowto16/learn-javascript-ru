# Контекст (This)

Чтобы понять что такое this, вам сначала нужно понять чем `this` не является, 
несмотря на любые предположения или заблуждения, которые могут тянуть вас вниз. 
`this` — это не ссылка функции на саму себя и это не ссылка на область видимости функции.

В действительности `this` — это привязка, которая создается во время вызова функции, и на что она 
ссылается определяется тем, где и при каких условиях функция была вызвана.

## Как задать контекст

### Можно привязать метод к объекту:

#### 1-ый способ:
```javascript
function getName() {
  return this.name;
}

const max = {
  name: 'Max',
}

const john = {
  name: 'John',
}

max.getName = getName; // this.name = Max
john.getName = getName; // this.name = John
```

#### 2-ой способ (Не создаем отдельную функцию, прокидываем анонимную):
```javascript
const user = {
  name: 'Max',
  getName: function() {
    return this.name;
  },
}
```
#### 3-ий способ (синтаксический сахар):
```javascript
const user = {
  name: 'Max',
  getName() {
    return this.name;
  },
}
```

### Можно напрямую задать его при вызове функции
```javascript
getName.call(user)
getName.apply(user)
```

### Можно хардово забиндить
```javascript
const getNameWithUserContext = getName.bind(user)
getNameWithUserContext()
```

## Позднее связывание

```javascript
const company1 = { name: 'Hexlet', getName: function getName() { return this.name } };
const company2 = { name: 'Hexlet Plus' };

company1.getName(); // "Hexlet"

company2.getName = company1.getName;

// В обоих случаях одна и та же функция
company2.getName(); // "Hexlet Plus"
company1.getName(); // "Hexlet"
```

Что здесь произошло? Вызов той же самой функции из другого объекта привел к смене объекта, на который ссылается `this`. 
Эта особенность называется **поздним связыванием**. 

> Значение `this` ссылается на тот объект, из которого происходит вызов метода.