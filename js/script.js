
const books = document.querySelectorAll('.books')
const book = document.querySelectorAll('.book')
const h2 = document.querySelectorAll('h2')
const ul = document.querySelectorAll('ul')
const li = document.querySelectorAll('li')

console.log(book)
console.log(books)
console.log(li)
console.log(ul)

books[0].prepend(book[1])
book[2].before(book[5])
book[5].before(book[3])
book[3].before(book[4])
book[4].before(book[0])

const image = document.querySelector("body")
.style.backgroundImage = "URL('./image/adv.jpg')"

const newh2 = document.createElement('h2')
newh2.innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>'
h2[4].replaceWith(newh2)  /* заменяю новый h2 на новый h2, не так надо */

li[2].before(li[3])
li[4].after(li[5]) 
li[9].after(li[2])
li[2].after(li[10])
li[4].before(li[6]) 
li[4].before(li[8]) 

li[47].after(li[55]) 
li[55].after(li[49])  
li[49].after(li[50]) 
li[53].after(li[51])

// console.log(newh2) */

const adv = document.querySelector(".adv")
adv.remove()

const newli = document.createElement("li")
newli.textContent = "Глава 8: За пределами ES6"
li[25].append(newli)


