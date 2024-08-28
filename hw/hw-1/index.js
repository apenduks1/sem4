"use strict"
const list = document.querySelector(".list")
const images = [
    {
        img: 'https://www.google.com/imgres?q=%D0%BA%D0%B2%D1%96%D1%82%D0%B8%3A%20%D0%B2%D0%B8%D0%B4%D0%B8&imgurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fwp-content%2Fuploads%2F2023%2F03%2Fspring-flowers.jpg&imgrefurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fvesnyani-kvity%2F&docid=UYj6xAgnN-yVhM&tbnid=KNjAV8RvWtZ3NM&vet=12ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA..i&w=960&h=640&hcb=2&ved=2ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA',
        name: "1",
     
    },
    {
        img: 'https://www.google.com/imgres?q=%D0%BA%D0%B2%D1%96%D1%82%D0%B8%3A%20%D0%B2%D0%B8%D0%B4%D0%B8&imgurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fwp-content%2Fuploads%2F2023%2F03%2Fspring-flowers.jpg&imgrefurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fvesnyani-kvity%2F&docid=UYj6xAgnN-yVhM&tbnid=KNjAV8RvWtZ3NM&vet=12ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA..i&w=960&h=640&hcb=2&ved=2ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA',
        name: "2",
       
    },
    {
        img: 'https://www.google.com/imgres?q=%D0%BA%D0%B2%D1%96%D1%82%D0%B8%3A%20%D0%B2%D0%B8%D0%B4%D0%B8&imgurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fwp-content%2Fuploads%2F2023%2F03%2Fspring-flowers.jpg&imgrefurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fvesnyani-kvity%2F&docid=UYj6xAgnN-yVhM&tbnid=KNjAV8RvWtZ3NM&vet=12ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA..i&w=960&h=640&hcb=2&ved=2ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA',
        name: "3",
       
},
{
    img: 'https://www.google.com/imgres?q=%D0%BA%D0%B2%D1%96%D1%82%D0%B8%3A%20%D0%B2%D0%B8%D0%B4%D0%B8&imgurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fwp-content%2Fuploads%2F2023%2F03%2Fspring-flowers.jpg&imgrefurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fvesnyani-kvity%2F&docid=UYj6xAgnN-yVhM&tbnid=KNjAV8RvWtZ3NM&vet=12ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA..i&w=960&h=640&hcb=2&ved=2ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA',
    name: "4",
 
},
{
    img: '#',
    name: "5",
   
},
{
    img: 'https://www.google.com/imgres?q=%D0%BA%D0%B2%D1%96%D1%82%D0%B8%3A%20%D0%B2%D0%B8%D0%B4%D0%B8&imgurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fwp-content%2Fuploads%2F2023%2F03%2Fspring-flowers.jpg&imgrefurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fvesnyani-kvity%2F&docid=UYj6xAgnN-yVhM&tbnid=KNjAV8RvWtZ3NM&vet=12ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA..i&w=960&h=640&hcb=2&ved=2ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA',
    name: "6",
   
},
{
    img: 'https://www.google.com/imgres?q=%D0%BA%D0%B2%D1%96%D1%82%D0%B8%3A%20%D0%B2%D0%B8%D0%B4%D0%B8&imgurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fwp-content%2Fuploads%2F2023%2F03%2Fspring-flowers.jpg&imgrefurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fvesnyani-kvity%2F&docid=UYj6xAgnN-yVhM&tbnid=KNjAV8RvWtZ3NM&vet=12ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA..i&w=960&h=640&hcb=2&ved=2ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA',
    name: "7",
 
},
{
    img: 'https://www.google.com/imgres?q=%D0%BA%D0%B2%D1%96%D1%82%D0%B8%3A%20%D0%B2%D0%B8%D0%B4%D0%B8&imgurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fwp-content%2Fuploads%2F2023%2F03%2Fspring-flowers.jpg&imgrefurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fvesnyani-kvity%2F&docid=UYj6xAgnN-yVhM&tbnid=KNjAV8RvWtZ3NM&vet=12ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA..i&w=960&h=640&hcb=2&ved=2ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA',
    name: "8",
   
},
{
    img: 'https://www.google.com/imgres?q=%D0%BA%D0%B2%D1%96%D1%82%D0%B8%3A%20%D0%B2%D0%B8%D0%B4%D0%B8&imgurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fwp-content%2Fuploads%2F2023%2F03%2Fspring-flowers.jpg&imgrefurl=http%3A%2F%2Fsvitdovkola.com.ua%2Fvesnyani-kvity%2F&docid=UYj6xAgnN-yVhM&tbnid=KNjAV8RvWtZ3NM&vet=12ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA..i&w=960&h=640&hcb=2&ved=2ahUKEwjq1sLAt_GHAxUCRPEDHWL0BI0QM3oFCIcBEAA',
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