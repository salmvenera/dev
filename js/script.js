'use strict';

const title = document.getElementsByTagName("h1")[0]
const buttonPlus = document.querySelector(".screen-btn")

const otherItemsPercent = document.querySelectorAll(".percent")
const otherItemsNumber = document.querySelectorAll(".number")

const startBtn = document.getElementsByClassName("handler_btn")[0]    //рассчет
const resetBtn = document.getElementsByClassName("handler_btn")[1]   //сброс рассчета

const rangeInput = document.querySelector('.rollback [type="range"]')   // откат посреднику 
const inputRangeValue = document.querySelector('.rollback .range-value') // процент бегунок

const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]     // итого дополнительных услуг
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]

let screens = document.querySelectorAll(".screen")

const custbox = document.querySelectorAll(".custom-checkbox")

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  rollback: 50,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  priceRollback: 0,
  interPrice: 0,
  countScreens: 0,
  fullPrice: 0,
  init: function () {
      this.addTitle()
      buttonPlus.addEventListener("click", this.addScreenBlock)
      startBtn.addEventListener("click", this.start.bind(this))
      resetBtn.addEventListener("click", this.reset)

      rangeInput.addEventListener("input", () => {
		      inputRangeValue.textContent = rangeInput.value + "%"
			    this.rollback = rangeInput.value
      })
      
      this.addScreens();

  },
  //тип экранов, количество экранов
  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach((screen, index) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;

        this.screens.push(
            { 
             id: index,
             name: selectName,
             price: +select.value * +input.value,
             count: input.value
            });
    });

  },
  start: function () {
    let error = false;
    screens.forEach(screen => {
        const selectVal = screen.querySelector('select').value;
        const inputVal = screen.querySelector('input').value;
        if ( selectVal == '' ||  inputVal == '') {
            error = true;
        };
    });
    if(error) return false;

    startBtn.style.display = "block"
    resetBtn.style.display = "none"
    this.clear()
    document.querySelectorAll(".screen input, .screen select").forEach(item => item.disabled = true)
    document.querySelectorAll(".elements input, .elements select").forEach(item => item.disabled = true)
    document.querySelectorAll(".screen-btn").forEach(item => item.disabled = true)
    this.addScreens();
    this.addServices();
    this.addServicesPercent();
    this.addServicesNumber();
    this.addPrices();
    this.showResult();
    console.log(this);
      
  },
  clear: function () {
    startBtn.style.display = "none";
    resetBtn.style.display = "block";
    this.screens = []; 
    this.countScreens = 0;
    this.screenPrice = 0;
    this.fullPrice = 0;
    this.priceRollback = 0;
    this.interPrice = 0;
    this.servicePricesNumber = 0;
    this.servicePricesPercent = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};

  },
  reset: function () {
    screens = document.querySelectorAll(".screen");
    for (let i = 1; i < screens.length; i++) {  
        screens[i].remove();
    }

    screens[0].querySelector("input").value = "";
    screens[0].querySelector("input").placeholder = "Количество экранов";
      
    screens[0].querySelector("select").options[0].selected = true;


    startBtn.style.display = "block"
    resetBtn.style.display = "none"
    custbox.forEach(item => item.checked= false)

    rangeInput.value = 0;
    inputRangeValue.textContent = rangeInput.value + "%";

    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;

    document.querySelectorAll(".screen input, .screen select").forEach(item => item.disabled = false);
    document.querySelectorAll(".elements input, .elements select").forEach(item => item.disabled = false);
    document.querySelectorAll(".screen-btn").forEach(item => item.disabled = false);
      
  },
      // итого, правая колонка
  showResult: function () {
      total.value = this.screenPrice  
      //стоимость верстки               
      totalCount.value = this.countScreens
      //количество экранов  
      totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
      //стоимость доп услуг
      fullTotalCount.value = this.fullPrice
      //итоговая стоимость
      totalCountRollback.value = this.priceRollback
      //стоимость с учетом отката

  },
      //блок дополнительно main-controls__checkbox, слева
  addServicesPercent: function () { 
      otherItemsPercent.forEach((elem) => {
			    const label = elem.querySelector("label").textContent
          const percent = +elem.querySelector('input[type=text]').value
		  	  const check = elem.querySelector('input[type=checkbox]')
			    if (check.checked) {
              this.servicesPercent[label] = +percent
			    }
	 	  })

  },
  addServicesNumber: function () { 
      otherItemsNumber.forEach((elem) => {
          const label = elem.querySelector("label").textContent
          const number = +elem.querySelector('input[type=text]').value
          const check = elem.querySelector('input[type=checkbox]')
          if (check.checked) {
              this.servicesNumber[label] = +number
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
    screens.forEach((elem, i) => {
        const select = elem.querySelector("select")
        const input = elem.querySelector("input")
        const selectName = select.options[select.selectedIndex].textContent

        this.screens.push({
            id: i,
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
    this.screens.forEach(item => {
        this.countScreens += +item.count;
        this.screenPrice += +item.price;
    })
    //  Подсчет доп услуг в руб 
    for (let key in this.servicesNumber) {
        this.servicePricesNumber += this.servicesNumber[key];	
    }
    // Подсчет суммы доп услуг с %
    for(let key in this.servicesPercent) {
        this.servicePricesPercent += (this.screenPrice * (this.servicesPercent[key]/100))	;
    }
    // Подсчет всей суммы
    this.fullPrice = this.servicePricesPercent + this.servicePricesNumber + this.screenPrice;

    // Подсчет суммы посредника
    this.interPrice =  (this.fullPrice * (this.rollback/100));

    // Подсчет стоимости с учетом отката
    this.priceRollback = this.fullPrice - this.interPrice;
  }
}
appData.init()





