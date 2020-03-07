
let displayValue, n1, n2, result;
let waitingN2 = false

const operate = (n1, operator, n2) => {
	const firstNum = Number(n1)
	const secondNum = Number(n2)
	if (operator == 'add') result = firstNum + secondNum
	if (operator == 'subtract') result = firstNum - secondNum
	if (operator == 'multiply') result = firstNum * secondNum
	if (operator == 'divide')secondNum != 0 ? result = Math.round(((firstNum / secondNum)*10)/10) : ("ERROR")
	prevCalc()
	updateCalc()
}

function addDisplay(){
	displayValue += this.value;
	updateDisplay()
}

function updateDisplay(){
	const display = document.querySelector('#display');
	display.textContent = displayValue;
}


function operatorInput(operator){
	if(!waitingN2){
		n1 = displayValue
		clearDisplay()
		waitingN2 = true
		return
	}else if(waitingN2){
		n2 = displayValue
		operate(n1, operator, n2);
		clearDisplay()
	}
	updateDisplay()
	prevCalc()
}

let updateCalc = () =>{
	displayValue = result
	updateDisplay()
}
const operatorDisplay = document.querySelector('#operatorDisplay');

let updateOperatorDisplay = () =>{
	operatorDisplay.textContent = sign;
}


//previous Display
const prevDisplay = document.querySelector('#prevDisplay');

let tempResult, tempN1, tempN2, tempOper, symbol, sign;

let updatePrevCalc = () => prevDisplay.textContent = prevDisplayValue

function prevCalc(){
	symbol = sign
	tempN1 = n1
	tempN2 = n2
	tempOper = operator
	tempResult = result
	prevDisplayValue = tempN1 + " " + symbol + " " + tempN2 + " = " + result
	updatePrevCalc()
	n1 = result

}

function equal(){
	n2 = displayValue
	operate(n1, operator, n2)
	n1 = result
	n2 = tempN2
}

//input decimal
function inputDot() {
	for (i=0; i<displayValue.length; i++){
		if(displayValue.indexOf('.')<0){
			displayValue += '.'
		}
	}
	updateDisplay()
}

//change value to positive or negative
let changeSign = () =>(displayValue *= -1,updateDisplay())

//clear all
function clearAll() {
	n1 = ''
	n2 = ''
	displayValue = ''
	sign = ''
	operator = ''
	result = ''
	tempResult = ''
	waitingN2 = false
	updateDisplay()
}

//clear display
function clearDisplay(){
	displayValue = ''
	updateDisplay()
}

//delete last number at the end of display
function delLast() {displayValue.length > 1 ?
	displayValue = displayValue.slice(0,-1) : displayValue = 0;
	updateDisplay()
}

clearAll()
updateDisplay()

//find operator symbol
let findSign = (operator) =>{
	if (operator == 'add'){
		return(sign = "\u002B")
	} else if (operator == 'subtract'){
		return(sign = "\u2212")
	} else if (operator == 'multiply'){
		return(sign = "\u00D7")
	} else if (operator == 'divide'){
		return(sign = "\u00F7")
	}
}

//function button event listener
document.querySelector('#eq').addEventListener('click', equal)
document.querySelector('#dot').addEventListener('click', inputDot)
document.querySelector('#plusmn').addEventListener('click', changeSign)
document.querySelector('#AC').addEventListener('click', clearAll)
document.querySelector('#CE').addEventListener('click', clearDisplay)
document.querySelector('#del').addEventListener('click', delLast)


//number button event listener
const numBtns = document.querySelectorAll('.num');
numBtns.forEach(button =>{
	button.addEventListener('click', addDisplay);
});

//operator button event listener
const operBtns = document.querySelectorAll('.oper');
operBtns.forEach(button =>{
	button.addEventListener('click', (e) =>{
		operator = button.id
		operatorInput(operator);
		findSign(operator)
		updateOperatorDisplay()

	});
});

//keypress event listener
document.addEventListener('keydown', (event) => {
	const { key } = event;
	if(isNaN(key)){
		if (key === "Enter")equal()
		if (key == "+")operator = 'add'
		if (key == "-")operator = 'subtract'
		if (key == "*")operator = 'multiply'
		if (key == '/')operator = 'divide'
		if (key == 'Escape')allClear()
		if (key == 'Backspace')delLast()
		operatorInput(operator)
		findSign(operator)
		updateOperatorDisplay()
	}else{
		value = key
		addDisplay()
	}
});
