// variables
let display = document.querySelector('.display-input')
let equal = document.querySelector('.equal')
let buttons = document.querySelectorAll('#btn')
let resultText = document.querySelector('.result-text')
var result;
var result2;

// eventlisteners
eventlisteners()
function eventlisteners(){
    equal.addEventListener('click',() =>{
        result = display.value.replace('×','*')
        result2 = result.replace('÷','/')
        display.value = eval(result2)
    })
    buttons.forEach(button =>{
        button.addEventListener('click',()=>{
            result = display.value.replace('×','*')
            result2 = result.replace('÷','/')
            resultText.textContent = eval(result2)
        })
    })    
}