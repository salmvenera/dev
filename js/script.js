'use strict';

const title = document.getElementsByTagName('h1')
console.log(title[0])

const handler_btn = document.getElementsByClassName('handler_btn')
console.log(handler_btn)

const screen_btn = document.querySelector('.screen-btn')
console.log(screen_btn)

const item_percent = document.querySelectorAll('.percent')
console.log(item_percent)

const item_number = document.querySelectorAll('.number')
console.log(item_number)

const range = document.querySelector('.main-controls__item.rollback input[type="range"]')
console.log(range)

const span = document.querySelector('.rollback .range-value')
console.log(span)

const input = document.getElementsByClassName('total-input')
console.log(input[0])
console.log(input[1])
console.log(input[2])
console.log(input[3])
console.log(input[4])

let blockscreen = document.querySelectorAll('.screen')
console.log(blockscreen)

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  services: {},
  rollback: 50,
  allServicePrices: 0,
  servicePercentPrice: 0,
  fullPrice: 0,
  start: function () {
    appData.asking();
    this.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle;

    appData.logger();
  },
  asking: function () {

    do {
      appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    } while (!isNaN(appData.title));
      /* appData.title = appData.getTitle();  */
    
    for (let i = 0; i < 2; i++) {
        let name;
        let price = 0;
      do {
         name = prompt('Какие типы экранов нужно разработать?');
      } while (!isNaN(name)); 

      do {
         price = prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price)); 

      appData.screens.push({ id: i, name: name, price: price })
    }

    for (let i = 0, j; i < 2; i++) {  
      let name; 

      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while (!isNaN(name));     

      do {
        j = prompt('Сколько это будет стоить?');
      }
      while (!appData.isNumber(j))
      
      appData.services[name] = +j   //должно заноситься число, поэтому ставим плюсик +j
    }
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  addPrices: function() {                        //стоимость услуг и экранов
    for (let screen of appData.screens) {
        appData.screenPrice += +screen.price
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }

  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) 
  }, 
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + +appData.allServicePrices
  },
  getTitle: function () {
    appData.title = appData.title.trim[0].toUpperCase() + appData.title.trim().substr(1).tolowerCase()
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
      console.log(appData.screens);
    }
  } 
}
appData.start();





