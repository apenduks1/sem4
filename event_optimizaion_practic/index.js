const colorPallete = document.querySelector('.color-palette')

const output = document.querySelector('.output')


const randomColor = () => {
    return Math.round(Math.random() * 256).toString(16).padStart(2, "0")
}

console.log(randomColor());

const createPaletteItems = () => {
    const items = [];

    for(let i = 0; i < 100; i++) {
        const color = `#${randomColor()}${randomColor()}${randomColor()}`;
        const item =document.createElement('button');
        item.dataset.color = color;
        item.style.backgroundColor = color
        item.classList.add('item');
        items.push(item)
    }
    colorPallete.append(...items)
}

createPaletteItems()
const selectColor = (event) => {
    if(event.target.nodeName !== "BUTTON"){
        return
    }
    const selectColor = event.target.dataset.color
console.log('selectColor: ', selectColor);
 
output.textContent =`selectColor: ${selectColor} `
output.style.color = selectColor

}

colorPallete.addEventListener('click', selectColor)