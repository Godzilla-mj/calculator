
//mathematical functions
let add = (a,b) => a+b
let subtract = (a,b) => a-b
let multiply = (a,b) => a*b
let divide = (a,b) => b != 0 ? a/b : "ERROR: div/0"
let operate = (a, oper, b) => (oper(a,b), updateDisplay())
//num storage
let display = document.querySelector("#display");
let displayValue = 0;
let a = 0;
let oper = "";
let b = 0;
let tempResult = operate(oper, a, b);

debugger
console.log("test");
let updateDisplay = () => {
	display.textContent = displayValue
	console.log("updateDisplay");
};
let addDisplay = () => !0 
	? displayValue += this.value 
	: displayValue = ''
	updateDisplay()
let clearDisplay = () => (displayValue = 0, updateDisplay())
let delLast = () => displayValue.length > 1 
	? displayValue = displayValue.slice(0,-1) 
	: displayValue = 0
	updateDisplay()

let addOper = (a, oper) => {
	a = displayValue;
	oper = document.getElementByGroup('oper').value
	clearDisplay()
}



const numBtns = document.querySelectorAll('.num');
numBtns.forEach(button => (button.addEventListener('click', addToDisplay)));

const operBtns = docuemnt.querySelectorAll('.oper');
operBtns.forEach(button => (button.addEventListener('click'), addOper));