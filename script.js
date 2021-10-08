'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let rollback = 50;
let allServicePrices;
let servicePercentPrice;
let fullPrice;



const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) 
}

const asking = function() {
  title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные, интерактивные');

  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  }
  while (!isNumber(screenPrice)) 

  screenPrice = Number(screenPrice);
  
  adaptive = confirm('Нужен ли адаптив на сайте?');
}
asking()

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0, j; i < 2; i++) {                   //                               ...                  Запускаем два раза, чтобы дважды задать вопрос 
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    do {
      j = prompt('Сколько это будет стоить?');
    }
    while (!isNumber(j))
    sum += +j;
  }
  return sum;
}
    

allServicePrices = getAllServicePrices();

function getFullPrice () {
  return screenPrice + allServicePrices
}

fullPrice = getFullPrice();

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);                                                                                 // делал александр
}

const getTitle = function () {
  title = title.trim();
  return title[0].toUpperCase() + title.slice(1);
}

title = getTitle();

let percent = fullPrice * (rollback/100);

function getServicePercentPrices() {
  return fullPrice - percent
}

servicePercentPrice = getServicePercentPrices();      // назначили значением переменной рез-т выполнения ф-ии

const getRollbackMessage = function(price) {                                     
  if (price >= 30000 ) {
    return 'Даем скидку в 10%'
  } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%'
  } else if (price >= 0 && price < 15000) {
    return 'Скидка не предусмотрена'
  } else {
    return 'Что-то пошло не так'
  }
}

showTypeOf(title);   
showTypeOf(screenPrice);  
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);                           // сумма дополнительных услуг
console.log(screens.toLowerCase().split(', '));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);


console.log('Стоимость верстки экранов ' + screenPrice + ' долларов и стоимость разработки сайта ' + fullPrice + ' долларов');










