# Поиск: getElement*, querySelector*

Есть 6 основных методов поиска элементов в DOM:

| Метод                  | Ищет по..    | Ищет внутри элемента? | Возвращает живую коллекцию? |
|------------------------|--------------|-----------------------|-----------------------------|
| querySelector          | CSS-Selector | Да                    | Нет                         |
| querySelectorAll       | CSS-Selector | Да                    | Нет                         |
| getElementById         | id           | Нет                   | Нет                         |
| getElementsByName      | name         | Нет                   | Да                          |
| getElementsByTagName   | tag или '*'  | Да                    | Да                          |
| getElementsByClassName | class        | Да                    | Да                          |

Кроме того:

- `elem.matches(css)` - проверяет, удовлетворяет ли элемент CSS-селектору 
- `elem.closest(css)` - ищет ближайшего по иерархии предка, соответствующему данному 
  CSS-селектору Сам элемент также включён в поиск.
- `elemA.contains(elemB)` - `true`, если `elemB` находится внутри `elemA` или когда `elemA==elemB`