'use strict';

let title = 'Project';
title = prompt('Как называется ваш проект?')
console.log(title);  
console.log(typeof title);                   //вывод в консоль тип данных переменной //

let screens = 'Простые, сложные, интерактивные';
console.log(screens.length);
console.log(screens.toLowerCase().split(', '));
screens = prompt('Какие типы экранов нужно разработать?')
console.log(screens);

let screenPrice = 10;
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
screenPrice = prompt('Сколько будет стоить данная работа?');

let rollback = 50;

let fullPrice = 25555;
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(`Процент отката посреднику за работу ${(fullPrice * (rollback/100))} рублей`);
console.log(typeof fullPrice);   //вывод в консоль тип данных переменной //

let adaptive = true;
adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(typeof adaptive);   //вывод в консоль тип данных переменной //

let service1 = prompt('Какой дополнительный тип услуги нужен?')
  console.log(service1);

let servicePrice1 = prompt('Сколько это будет стоить?')
  console.log(servicePrice1);

let service2 = prompt('Какой дополнительный тип услуги нужен?')
  console.log(service2);

let servicePrice2 = prompt('Сколько это будет стоить?')
  console.log(servicePrice2);

  fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);   //сохранили в переменную fullPrice и можем использовать ее
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)))
console.log(servicePercentPrice);

if (fullPrice > 30000 ) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 15000 && fullPrice <30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}

  











