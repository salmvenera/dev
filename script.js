 'use strict';

let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные, интерактивные');  //
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 50;

const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2
}

let allServicePrices = getAllServicePrices();

function getFullPrice () {
  return screenPrice + allServicePrices
}

let fullPrice = getFullPrice();

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);                                                                                 // делал александр
}

const getTitle = function() {
  title = title.trim();
  return title[0].toUpperCase() + title.slice(1);
}

title = getTitle();

let percent = fullPrice * (rollback/100);

function getServicePercentPrices() {
  return fullPrice - percent
}

let servicePercentPrice = getServicePercentPrices();

const getRollbackMessage = function(price) {                                //делал александр       
  if (price > 30000 ) {
    return 'Даем скидку в 10%'
  } else if (price > 15000 && price <30000) {
    return 'Даем скидку в 5%'
  } else if (price < 15000 && price > 0) {
    return 'Скидка не предусмотрена'
  } else {
    return 'Что-то пошло не так'
  }
}

showTypeOf(title);   
showTypeOf(screenPrice);  
showTypeOf(adaptive);
console.log(screens.toLowerCase().split(', '));
getRollbackMessage(servicePercentPrice);
console.log(servicePercentPrice);










