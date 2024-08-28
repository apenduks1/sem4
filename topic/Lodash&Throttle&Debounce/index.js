const vanilla = document.querySelector(".vanilla")
const thortteld = document.querySelector(".thortteld")
const debounse = document.querySelector('.debounse')

const eventCounter = {
    vanilla: 0,
    thortteld: 0,
    debounse: 0,
}

document.addEventListener('scroll', () => {
    eventCounter.vanilla += 1
    vanilla.textContent = eventCounter.vanilla
})

document.addEventListener('scroll',  _.throttle(() => {
    eventCounter.thortteld += 1
    thortteld.textContent = eventCounter.thortteld
}, 1000))

document.addEventListener('scroll',  _.debounce(() => {
    eventCounter.debounse += 1
    debounse.textContent = eventCounter.debounse
}, 1000, {
    leding: true,
    traling: false
}))

const search = document.querySelector("#search")
const items = document.querySelectorAll(".item")
const callbackFilter = (event) => {
    const searchText = event.target.value.toLowerCase()
  
    items.forEach(item => {
      if (item.textContent.toLowerCase().includes(searchText)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  }
  search.addEventListener("input", _.debounce(callbackFilter, 1000))

  //Потрібно забезпечити виклик функції при завершенні введення тексту в поле input. Використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно викликати при завершенні введення тексту.
  //Потрібно затримати виконання функції при введенні тексту в поле input, щоб не перевантажувати сервер. Використовуйте метод throttle з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно виконати при введенні тексту.

const input = document.querySelector(".input")

input.addEventListener('input', _.debounce(() =>{
    console.log(input.value);
    
},500))

//Потрібно забезпечити виклик функції при завершенні переміщення мишкою. Використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яку потрібно викликати при завершенні переміщення мишкою.

input.addEventListener('mousemove', _.debounce(() =>{
  console.log("Миша тікає");
  
},500))


//Напишіть скрипт привітання користувача на сторінці. Коли користувач введе своє ім’я в інпут на екрані повино з’явитися текст “Вітаємо, ім’я!”. Текст повинен змінитися лише після того як користувач повністю ввів своє ім’я.

const name = document.querySelector(".name")
input.addEventListener('input', _.debounce(() =>{
 name.textContent = `Вітаємо, ${input.value}`
  
},500))

// /Створіть блок на сторінці, який реагує на рух миші. Кожен раз, коли користувач рухає мишкою, змінюються координати точки на графіку відповідно до руху миші. Використайте метод throttle з бібліотеки lodash для того, щоб координати оновлювалися не занадто часто та не затримували користувача. Встановіть час затримки в мілісекундах, наприклад 50 мс, і передайте функцію, яка буде виконуватися при русі миші.

const result = document.querySelector("#coord")
const div = document.querySelector("#graph")
const point = document.querySelector("#point")

div.addEventListener('mousemove', _.throttle(v(event) =>{
  const basePositionMouse = div.getBoundingClientRect()
  const x = event.clientX-basePositionMouse.left
  const y = event.clientY-basePositionMouse.top
 point.setAttribute('cx', x)
 point.setAttribute('cy', y)
 
result.textContent = `X: ${x}, Y: ${y}`
  
},50))  
