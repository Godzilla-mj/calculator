

//mathematical functions
let add = (a,b) => result = a+b
let subtract = (a,b) => result = a-b
let multiply = (a,b) => result = a*b
let divide = (a,b) => b != 0 ? result = Math.round(a/b * 10) / 10 : "ERROR: div/0"
let operate = (a, oper, b) => {
	if (oper == 'add'){
		add(a,b)
		updateCalc()
	}
	if (oper == 'subtract'){
		subtract(a,b)
		updateCalc()
	}
	if (oper == 'multiply'){
		multiply(a,b)
		updateCalc()
	}
	if (oper == 'divide'){
		divide(a,b)
		updateCalc()
	}	
}

//num storage
let display = document.querySelector("#display");
let displayValue = 0;

//display functions
let updateDisplay = () => display.textContent = displayValue

let updateCalc = () =>{
	displayValue = result
	updateDisplay()
	a = result
}

function addDisplay() {
	if(displayValue == 0){
		displayValue = ''
	}
	displayValue += this.value
	updateDisplay()
};

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
