'use strict';

const title = document.getElementsByTagName("h1")[0]
const buttonPlus = document.querySelector(".screen-btn")

const otherItemsPercent = document.querySelectorAll(".percent")
const otherItemsNumber = document.querySelectorAll(".number")

const startBtn = document.getElementsByClassName("handler_btn")[0]    //рассчет
const resetBtn = document.getElementsByClassName("handler_btn")[1]   //сброс рассчета

const rangeInput = document.querySelector('.rollback [type="range"]')
const inputRangeValue = document.querySelector('.rollback .range-value')

const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]

let screens = document.querySelectorAll(".screen")

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  rollback: 50,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicePercentPrice: 0,
  priceRollback: 0,
  interPrice: 0,
  countScreens: 0,
  fullPrice: 0,
  init: function () {
    appData.addTitle()
    setInterval(() => appData.addScreens(), 1000)
    buttonPlus.addEventListener("click", appData.addScreenBlock)
    startBtn.addEventListener("click", appData.start)
    rangeInput.addEventListener("input", function () {
		  inputRangeValue.textContent = rangeInput.value + "%"
			appData.rollback = rangeInput.value
    })
  },
  addScreens: function () {
      screens = document.querySelectorAll(".screen")
        for (let i = 0; i < screens.length; i++) {
            if (screens[i].querySelector("select").selectedIndex === 0 || screens[i].querySelector("input").value === "") {
               startBtn.disabled = true
               break;
            }  else {
               startBtn.disabled = false
            }
        }
  },
  start: function () {
      appData.addServices()
      appData.addServicesPercent()
      appData.addServicesNumber()
      appData.addPrices()
      appData.showResult()
      console.log(appData)
  },
  showResult: function () {
    total.value = appData.screenPrice  
      //стоимость верстки               
    totalCount.value = appData.countScreens
    //количество экранов  
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    //стоимость доп услуг
    fullTotalCount.value = appData.fullPrice
    //итоговая стоимость
    totalCountRollback.value = appData.priceRollback
    //цена с учетом отката
  },
  addServicesPercent: function () { 
		otherItemsNumber.forEach(function (elem) {
			const label = elem.querySelector("label").textContent
      const percent = +elem.querySelector('input[type=text]').value
			const check = elem.querySelector('input[type=checkbox]')
			 if (check.checked) {
					appData.servicesPercent[label] = +percent
			 }
		})
  },
  addServicesNumber: function () { 
    otherItemsNumber.forEach(function (elem) {
      const label = elem.querySelector("label").textContent
      const number = +elem.querySelector('input[type=text]').value
      const check = elem.querySelector('input[type=checkbox]')
        if (check.checked) {
           appData.servicesNumber[label] = +number
        }
    })
  }, 
  addScreenBlock: function () {
      screens = document.querySelectorAll(".screen")
      const cloneScreen = screens[0].cloneNode(true)
      screens[screens.length - 1].after(cloneScreen)
      cloneScreen.querySelector("input").value = ""

   },
  addServices: function () {
      screens = document.querySelectorAll(".screen")
      screens.forEach(function (elem, index) {
        const select = elem.querySelector("select")
        const input = elem.querySelector("input")
        const selectName = select.options[select.selectedIndex].textContent
  
      appData.screens.push({
        id: index,
        name: selectName,
        price: +input.value * +select.value,
          count: +input.value
      })
      })
  },
  addTitle: function() {
    document.title = title.textContent
  },
  addPrices: function () { 
  // Подсчет кол-ва экранов
     for(let i = 0; i < appData.screens.length; i++) {
       appData.countScreens = appData.countScreens + appData.screens[i].count
     }
  // Подсчет суммы экранов
     for (let i = 0; i < appData.screens.length; i++){
       appData.screenPrice = appData.screenPrice +appData.screens[i].price
     }
  //Подсчет доп услуг в руб 
     for (let key in appData.servicesNumber) {
       appData.servicePricesNumber += appData.servicesNumber[key]	
     }
  // Подсчет суммы доп услуг с %
     for(let key in appData.servicesPercent) {
       appData.servicePricesPercent += (appData.screenPrice * (appData.servicesPercent[key]/100))	
     }
  // Подсчет всей суммы
      appData.fullPrice = appData.servicePricesPercent + appData.servicePricesNumber + appData.screenPrice
  // Подсчет суммы посредника
      appData.interPrice =  (appData.fullPrice * (appData.rollback/100))
  // Подсчет стоимости с учетом отката
      appData.priceRollback = appData.fullPrice - appData.interPrice
}
}
appData.init()





