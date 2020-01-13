

//mathematical functions
let add = (a,b) => result = a+b
let subtract = (a,b) => result = a-b
let multiply = (a,b) => result = a*b
let divide = (a,b) => b != 0 ? result = Math.round(a/b * 10) / 10 : "ERROR: div/0"
let operate = (a, oper, b) => {
	if (oper == 'add'){
		sign = "\u002B"
		add(a,b)
	}
	else if (oper == 'subtract'){
		sign = "\u2212"
		subtract(a,b)
	}
	else if (oper == 'multiply'){
		sign = "\u00D7"
		multiply(a,b)
	}
	else if (oper == 'divide'){
		sign = "\u00F7";
		divide(a,b)
	}	
	return(updateCalc())
}

let sign;

function findSign(){
	if(oper == "add"){
		console.log("oper is add")
	}
	if(oper == "subtract"){
		console.log("oper is subtract")
	}
	if(oper == "multiply"){
		console.log("oper is multiply")
	}
	if(oper == "division"){
		console.log("oper is division")
	}
}

//num storage
let prevDisplay = document.querySelector('#prevDisplay'); 
let display = document.querySelector("#display");
let displayValue ;
let iteration;

//display functions
let updateDisplay = () => display.textContent = displayValue;

let updatePrevCalc = () => prevDisplay.textContent = prevDisplayValue;

let addOper = () => {
	if(iteration == 0){
		iteration++
		a = displayValue;
		findSign()
		clearDisplay()
	}
	if(displayValue == ""){
		findSign()
	}
	else{
		iteration++
		b = displayValue
		equal()
		findSign()
		clearDisplay()
	}
}

let equal = () =>{
	iteration = 0
	b = displayValue;
	operate(Number(a), oper, Number(b));
}

let updateCalc = () =>{
	displayValue = result
	updateDisplay()
	prevCalc()
	a = result
}

function addDisplay() {
	if(displayValue == 0){
		displayValue = ''
	}
	displayValue += this.value
	updateDisplay()
};

function prevCalc(){
	symbol = sign
	tempA = a
	tempB = b
	tempOper = oper
	tempResult = result
	prevDisplayValue = tempA + " " + symbol + " " + tempB + " = " + result
	updatePrevCalc()

}

//clear everything, current display, and last number functions
let clearE = () => {
	iteration = 0
	a = 0
	b = 0
	result = 0
	oper = ''
	clearDisplay()
}

let clearDisplay = () => (displayValue = '', updateDisplay())

let delLast = () => {displayValue.length > 1 ?
	displayValue = displayValue.slice(0,-1) : displayValue = 0;
	updateDisplay()
}

//input decimal
let inputDot = () =>{
	for (i = 0; i < displayValue.length; i++){
		if(displayValue.indexOf(".") < 0){
			displayValue += "."
			updateDisplay()
		}
	}
}

//change value to positive or negative
let changeSign = () =>{
	displayValue *= -1
	updateDisplay()
}
//button event listeners
const numBtns = document.querySelectorAll('.num');
numBtns.forEach(button =>{
	button.addEventListener('click', addDisplay);
});


const operBtns = document.querySelectorAll('.oper');
operBtns.forEach(button =>{
	button.addEventListener('click', (e) =>{
		oper = button.id
		addOper()
	});
});

document.querySelector('#CE').addEventListener('click', clearE)
document.querySelector('#C').addEventListener('click', clearDisplay)
document.querySelector('#del').addEventListener('click', delLast)
document.querySelector('#eq').addEventListener('click', equal)
document.querySelector('#dot').addEventListener('click', inputDot)
document.querySelector('#plusmn').addEventListener('click', changeSign)

clearE()