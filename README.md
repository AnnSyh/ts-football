# ts-football

- http://joxi.ru/l2Z7QblUlJgo3A - таблица с исходными данными
- http://joxi.ru/n2YyVbZukN3NB2 - цель приложения
- http://joxi.ru/BA0yWj1u1O5DYr  - преобразование данных 

## Установка и запуск

- git@github.com:AnnSyh/ts-football.git - стягиваем проект
- cd ts-football/stats/src  - переходим в папку src/
- npm i - установка зависимостей
- npm start - запуск проекта, запускаем 2-ды   (при 1-ом запуске будет ошибка т.к. еще не сбилден проект, при 2-ом все норм)

- Запускается в терминале:

Выдает кол-во выигранных Man United матчей

Man United won 18 times


## Используемые технологии:
- Typescript
- 1-я версия:

 Использовала создание абстрактного класса CsvFileReader<T>  с дженерик типом <T>
 
 Что-бы сделать код многократно используемым (reusible)
