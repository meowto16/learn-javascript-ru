# Цепочка промисов

Если обработчик в `.then` (или в `catch`/`finally`, без разницы) возвращает промис, 
последующие элементы цепочки ждут, пока этот промис выполнится. 
Когда это происходит, результат его выполнения (или ошибка) передаётся дальше.

Если с обработчика приходит не промис, то они выполняются просто по очереди.
