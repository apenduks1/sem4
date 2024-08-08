"use strict"
const list = document.querySelector(".list")
const images = [
    {
        img: '#',
        name: "1",
     
    },
    {
        img: '#',
        name: "2",
       
    },
    {
        img: '#',
        name: "3",
       
},
{
    img: '#',
    name: "4",
 
},
{
    img: '#',
    name: "5",
   
},
{
    img: '#',
    name: "6",
   
},
{
    img: '#',
    name: "7",
 
},
{
    img: '#',
    name: "8",
   
},
{
    img: '#',
    name: "9",
   
}

]
images.forEach(images => {
   const{img, name} = img
   const li = document.createElement["li"]
   li.innerHTML`
    <img src="${img}" alt="${name} width="300" height="400">`
   console.log(li);
   list.appendChild(li) 
})

list.addEventListener('click', (event)=>{
    const clickedElement = event.target
    const li = clickedElement.parentElement
    const imgNumber = li.querySelector("h3").textContent
    alert(`Ви обрали картинку номер ${imgNumber}`)
})