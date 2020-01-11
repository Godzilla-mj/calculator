

//mathematical functions
let add = (a,b) => result = a+b
let subtract = (a,b) => result = a-b
let multiply = (a,b) => result = a*b
let divide = (a,b) => b != 0 ? result = Math.round(a/b * 10) / 10 : "ERROR: div/0"
let operate = (a, oper, b) => {
	if (oper == 'add'){
		sign = "\u002B"
		add(a,b)
		updateCalc()
	}
	if (oper == 'subtract'){
		sign = "\u2212"
		subtract(a,b)
		updateCalc()
	}
	if (oper == 'multiply'){
		sign = "\u00D7"
		multiply(a,b)
		updateCalc()
	}
	if (oper == 'divide'){
		sign = "\u00F7";
		divide(a,b)
		updateCalc()
	}	
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
let displayValue = 0;

//display functions
let updateDisplay = () => display.textContent = displayValue;

let updatePrevCalc = () => prevDisplay.textContent = prevDisplayValue;

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

let clearE = () => {
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

let addOper = () => {
	a = displayValue;
	findSign()
	clearDisplay()
}

let equal = () =>{
	b = displayValue;
	operate(Number(a), oper, Number(b));
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

clearE()