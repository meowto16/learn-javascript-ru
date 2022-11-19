# Инкапсуляция

Инкапсуляция – это объединение функций (методов) и данных в рамках одной структуры, 
внутреннее состояние которой (данные) скрыто от внешнего мира.

Инкапсуляция это и объединение, и сокрытие там, где оно есть. 
Там где его нет, это просто объединение.

## Особенности

1. Работа с методами вместо функций приводит к одному неожиданному эффекту 
   – появляется возможность реализовать автодополнение методов в редакторах.
2. Для многих разработчиков код с методами выглядит "естественнее". С их точки зрения, 
   абстракции с помощью данных можно строить только на базе методов.
3. При работе с объектами нам не надо ничего дополнительно импортировать, как в случае с функциями. 
   1. Любая функция, в которую был передан объект, может вызывать его методы так, как она хочет.
   2. Эта особенность не дается бесплатно, она ограничивает расширение объектов
4. Цепочки - method chaining.
   1. У таких цепочек есть даже имя. [Fluent interface](https://ru.wikipedia.org/wiki/Fluent_interface)

## О пайпах

Сейчас они в стадии рассмотрения, но можно использовать с помощью babel.

https://github.com/tc39/proposal-pipeline-operator

