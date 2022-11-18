# Совершенный код: злые однострочники

- Автор: Hexlet ([Kirill Mokevnin](https://ru.hexlet.io/u/mokevnin))
- Ссылка на статью: https://ru.hexlet.io/blog/posts/sovershennyy-kod-zlye-odnostrochniki

## Хороший пример
```javascript
/ Реальный код из открытого проекта Хекслета
const programImports = source.program.body
  .filter(item => item.type === 'ImportDeclaration')
  .filter(item => item.source.value.startsWith('hexlet'));
// Весь код тут https://github.com/Hexlet/hexlet-exercise-kit/blob/master/import-documentation/src/index.js
```

## Плохой пример
```javascript
// Многие программисты искренне считают, что такой код хорош,
// потому что здесь нет переменных. Но это не так.
compareFiles(JSON.parse(fs.readFileSync(fullPathToFile1)), JSON.parse(fs.readFileSync(fullPathToFile2)))
```

## Как улучшить
```javascript
const config1 = JSON.parse(fs.readFileSync(fullPathToFile1));
const config2 = JSON.parse(fs.readFileSync(fullPathToFile2));

compareFiles(config1, config2);
```

## Правило трех вызовов

> Нужно разбивать выражения, содержащие три и более вложенных вызова:

```javascript
f(f2(f3())); // нужно разбивать
f(f2()); // вероятно не нужно (а может и нужно)
```

## Оказывается можно пользоваться пайпами благодаря babel

> Хозяйке на заметку. Лучший способ избавиться от вложенных вызовов – воспользоваться механизмом pipeline. 
> Благодаря babel он есть и в js.

https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator

## Попытка отрефачить пример

До:
```javascript
const urls = _.flatMap(['a', 'link', 'script', 'img'], item => $(item).map((i, el) => $(el).attr(attributes[item])).get().filter(el => el[0] === '/' && el.length > 1));
```

После:
```javascript
const attributes = {
  a: 'href',
  link: 'href',
  script: 'src',
  img: 'src'
}

const tags = ['a', 'link', 'script', 'img']
const urls = _.flatMap(
  tags, 
  nodes => $(nodes).map((i, node) => {
    const attributeWithUrl = attributes[item]
    return $(node).attr(attributeWithUrl).get()
  })
);
const validUrls = urls.filter((url) => {
  const isAbsoluteUrl = url.startsWith('/')
  const isValidLength = el.length > 1
  
  return isAbsoluteUrl && isValidLength
})
```