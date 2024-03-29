# Прототипы

В JavaScript с каждым объектом связан прототип. Прототип – это обычный объект, 
хранящийся в специальном служебном поле `[[prototype]]` (к этому полю невозможно обратиться напрямую). 

Его можно извлечь так:
```javascript
const date = new Date();
// Эта функция извлекает прототип объекта из самого объекта
const proto = Object.getPrototypeOf(date); // Date {}

// В прототипе хранится не конструктор
proto === Date; // false

const numbers = [1, 2];
Object.getPrototypeOf(numbers); // [] – отображение отличается, но это массив

// Прототипы есть и у конструкторов, которые мы определяем сами
function Company(name) {
  this.name = name;
}

const company = new Company();
Object.getPrototypeOf(company); // Company {}
```

> Если свойство для объекта не определено, то JavaScript смотрит в прототип и пытается выяснить есть ли это свойство у него. 
> 
> - Если есть, то возвращается его значение.
> - Если свойство не найдено в прототипе, то JavaScript смотрит прототип прототипа и так далее до конца цепочки, 
> а у неё есть конец: последний прототип в цепочке прототипов всегда null. 
> На базе этого механизма реализуется наследование.

Прототип, это просто объект, хранящийся в поле `prototype` функции-конструктора, а не сам конструктор.

