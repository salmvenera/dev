'use strict';

let title = prompt('Как называется ваш проект?')
let screens = prompt('Простые, сложные, интерактивные', 'Простые, сложные, интерактивные');  // 5 задание
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?'); 
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let rollback = 50;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)))
let allServicePrices = servicePrice1 + servicePrice2;
//let getFullPrice = screenPrice + allServicePrices;

const showTypeOf = function(variable) {
                                                                                  // делал александр
}

const getRollbackMessage = function(price) {                                      //  делал александр
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

const getAllServicePrices = function(servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2
}

function getFullPrice (screenPrice, allServicePrices) {
  return screenPrice + allServicePrices
}

const getTitle = function(str1) {
 return str1[0].toUpperCase(0) + str1.slice(1)
}

const getServicePercentPrices = function() {
  return fullPrice - (fullPrice * (rollback/100))
}

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)
getAllServicePrices(allServicePrices)                                          // первое задание
getFullPrice(getRollbackMessage(fullPrice))                                    //второе задание
getTitle(title)                                                               // третье задание
getServicePercentPrices(servicePercentPrice)                                 // четвертое задание

console.log(title[0].toUpperCase() + title.slice(1), typeof title);   
console.log(typeof screenPrice); 
console.log(typeof adaptive);   

console.log(getRollbackMessage(fullPrice));  //сделал александр
console.log(screens.length);
console.log(screens.toLowerCase().split(', '));
screens = prompt('Какие типы экранов нужно разработать?')
console.log(screens);
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(`Процент отката посреднику за работу ${(fullPrice * (rollback/100))} рублей`);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(allServicePrices);
console.log(servicePercentPrice);
//console.log(variable, typeof variable);












