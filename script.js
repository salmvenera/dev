'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  service1: '',
  service2: '',
  rollback: 50,
  allServicePrices: 0,
  servicePercentPrice: 0,
  fullPrice: 0,
  start: function () {
    appData.asking()
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.logger();
  },
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    appData.title = appData.getTitle();
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные, интерактивные');
    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    }
    while (!appData.isNumber(appData.screenPrice)); 
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) 
  }, 
  getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0, j; i < 2; i++) {                  //                               ...                  Запускаем два раза, чтобы дважды задать вопрос 
      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }

      do {
        j = prompt('Сколько это будет стоить?');
      }
      while (!appData.isNumber(j))
      sum += +j;
    }
    return sum;
  },
  getFullPrice: function () {
    return +appData.screenPrice + +appData.allServicePrices
  },
  getTitle: function () {
    appData.title = appData.title.trim();
    return appData.title[0].toUpperCase() + appData.title.slice(1);
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
  },
  getRollbackMessage: function(price) {      
    let message;                               
    if (price >= 30000 ) {
      message = 'Даем скидку в 10%';
    }  else if (price >= 15000 && price < 30000) {
      message = 'Даем скидку в 5%';
    }  else if (price >= 0 && price < 15000) {
      message = 'Скидка не предусмотрена';
    }  else {
      message = 'Что-то пошло не так';
    }
    return message;
  },
  logger(){
    for (let obj in appData){
      console.log(`Объект appData - ${appData[obj]}`);
    }
  } 
}
appData.start();





