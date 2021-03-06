let n1; //firstOperand
let n2; //lastOperand
let sign; //for previous display operator symbol

//mathematical functions
let operate = (n1, operator, n2) => {
	if (operator == 'add'){
		result = Number(n1) + Number(n2)
	} else if (operator == 'subtract'){
		result = Number(n1) - Number(n2)
	} else if (operator == 'multiply'){
		result = Number(n1) * Number(n2)
	} else if (operator == 'divide'){
		if(n2 != 0){
			result = Math.round(Number(n1)/Number(n2) * 10) / 10
		}else{"ERROR: div/0"}
	}
	return updateCalc()
}
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

//num storage
const prevDisplay = document.querySelector('#prevDisplay');
const operatorDisplay = document.querySelector('#operatorDisplay'); 
const display = document.querySelector("#display");

let displayValue;
let iteration;

//display functions
let updateDisplay = () => {
	if (displayValue != ''){
		display.textContent = Math.round(displayValue * 10)/10
	}else{display.textContent = displayValue}
}

function addDisplay() {
	if(waitingN2){
		displayValue += this.value;
		waitingN2 = false;
	}
	displayValue = displayValue === '0' ? this.value : displayValue + value;
	updateDisplay()
};

let addOperator = () => {
	if(iteration == 0){
		iteration++
		n1 = displayValue;
	} else{
		iteration++
		n2 = displayValue
		operate(n1, operator, n2);
	}
	clearDisplay()
}

let updateCalc = () =>{
	displayValue = result
	updateDisplay()
	prevCalc()
	n1 = result
}

let equal = () =>{
	n2 = displayValue
	operate(n1, operator, n2);
}

let updatePrevCalc = () => prevDisplay.textContent = prevDisplayValue;

function prevCalc(){
	symbol = sign
	tempN1 = n1
	tempN2 = n2
	tempOper = operator
	tempResult = result
	prevDisplayValue = tempN1 + " " + symbol + " " + tempN2 + " = " + result
	updatePrevCalc()

}

let updateOperatorDisplay = () => operatorDisplay.textContent = findSign(operator);

//input decimal
let inputDot = () =>{
	for (i=0; i<displayValue.length; i++){
		if(displayValue.indexOf('.')<0){
			displayValue += '.'
			updateDisplay()
		}
	}
}
//change value to positive or negative
let changeSign = () =>(displayValue *= -1,updateDisplay())
//reset all variables to 0
let clearE = () => {
	iteration = 0
	n1 = ''
	n2 = ''
	result = ''
	operator = ''
	clearDisplay()
}
//reset only current display
let clearDisplay = () => {
	displayValue = ""
	updateDisplay()
	updateOperatorDisplay()
}
//delete last number at the end of display
let delLast = () => {displayValue.length > 1 ?
	displayValue = displayValue.slice(0,-1) : displayValue = 0;
	updateDisplay()
}
//number button event listener
const numBtns = document.querySelectorAll('.num');
numBtns.forEach(button =>{
	button.addEventListener('click', addDisplay);
});

//operator input function
let operatorInput = () =>{
	updateOperatorDisplay()
	addOperator()
}

//operator button event listener
const operBtns = document.querySelectorAll('.oper');
operBtns.forEach(button =>{
	button.addEventListener('click', (e) =>{
		operator = button.id
		operatorInput()
	});
});

//function button event listener
document.querySelector('#AC').addEventListener('click', clearE)
document.querySelector('#CE').addEventListener('click', clearDisplay)
document.querySelector('#del').addEventListener('click', delLast)
document.querySelector('#eq').addEventListener('click', equal)
document.querySelector('#dot').addEventListener('click', inputDot)
document.querySelector('#plusmn').addEventListener('click', changeSign)

//keypress event listener
document.addEventListener('keydown', (event) => {
	const { key } = event;
	if(isNaN(key)){
		if (key === "Enter") {
			equal()
			return updateDisplay()
		}else if (key == "+"){
			operator = 'add'
			return operatorInput()
		}else if (key == "-"){
			operator = 'subtract'
			return operatorInput()
		}else if (key == "*"){
			operator = 'multiply'
			return operatorInput()
		}else if (key == '/'){
			operator = 'divide'
			return operatorInput()
		}else if (key == 'Escape'){
			return clearE()
		}else if (key == 'Backspace'){
			return delLast()
		}
	} else { 
		value = key
		addDisplay()
	}
});



clearE();