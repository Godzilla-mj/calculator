let displayValue = '';
let currentOperand = '';
let previousOperand = '';
let n2
let n1

function getDisplay(){
	const display = document.querySelector('#display');
	displayValue += this.value
	display.textContent = displayValue;
}

function handleOperator(operator){
	if(n2 === '') return;
	if(n2 !== ''){
		operate(n1, operator, n2);
	}
	this.operator = operator;
	n1 = displayValue;
	n1 = n2;
	n2 = '';
}

const operate = (n1, operator, n2) => {
	const firstNum = Number(n1)
	const secondNum = Number(n2)
	if (operator == 'add') result = firstNum + secondNum
	if (operator == 'subtract') result = firstNum - secondNum
	if (operator == 'multiply') result = firstNum * secondNum
	if (operator == 'divide')secondNum != 0 ? result = Math.round(((firstNum / secondNum)*10)/10) : ("ERROR")
	n1 = result
	n2 = ''
	operator = undefined
}

function equal(){
}

//input decimal
function inputDot() {
	for (i=0; i<displayValue.length; i++){
		if(displayValue.indexOf('.')<0){
			displayValue += '.'
		}
	}
}

//change value to positive or negative
let changeSign = () =>(displayValue *= -1, getDisplay())

//clear all
function allClear() {
	n2 = ''
	n1 = ''
	displayValue = ''
	operator = undefined
	result = ''
	tempResult = ''
	display.textContent = displayValue;

}

//clear display
function clearEntry(){
	displayValue = ''
	display.textContent = displayValue;

}

//delete last number at the end of display
function delLast() {displayValue.length > 1 ?
	displayValue = displayValue.slice(0,-1) : displayValue = 0;
}

//function button event listener
document.querySelector('#eq').addEventListener('click', operate)
document.querySelector('#dot').addEventListener('click', inputDot)
document.querySelector('#plusmn').addEventListener('click', changeSign)
document.querySelector('#AC').addEventListener('click', allClear)
document.querySelector('#CE').addEventListener('click', clearEntry)
document.querySelector('#del').addEventListener('click', delLast)


//number button event listener
const numBtns = document.querySelectorAll('.num');
numBtns.forEach(button =>{
	button.addEventListener('click', getDisplay)
});

//operator button event listener
const operBtns = document.querySelectorAll('.oper');
operBtns.forEach(button =>{
	button.addEventListener('click', (e) =>{
		operator = button.id
		handleOperator(operator);
	});
});

//keypress event listener
document.addEventListener('keydown', (event) => {
	const { key } = event;
	if(isNaN(key)){
		if (key === "Enter")operate();
		if (key == "+"){
			operator = 'add'
			sign = "\u002B"
			handleOperator(operator);
		}
		if (key == "-"){
			operator = 'subtract'
			sign = "\u2212"
			handleOperator(operator);
		}
		if (key == "*"){
			operator = 'multiply'
			sign = "\u00D7"
			handleOperator(operator);
		}
		if (key == '/'){
			operator = 'divide'
			sign = "\u00F7"
			handleOperator(operator);
		}
		if (key == 'Escape')allClear()
		if (key == 'Backspace')clearEntry()
	}else{
		value = key
		getDisplay()
	}
});
