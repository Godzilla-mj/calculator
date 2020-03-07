class Calculator {
	constructor(previousOperandText, currentOperandText) {
		this.previousOperandText = previousOperandText;
		this.currentOperandText = currentOperandText;
		this.allClear();
	}

	allClear() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operator = undefined;
	}

	clearEntry() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1)
	}

	insert(num) {
		if (num === '.' && this.currentOperand.includes('.')) return;
		this.currentOperand = this.currentOperand.toString() + num.toString();
	}

	getOperator(operator) {
		if (this.currentOperand === "") return;
		if (this.currentOperand !== "") {
			this.operate();
		}
		this.operator = operator;
		this.previousOperand = this.currentOperand;
		this.currentOperand = "";
	}

	operate() {
		let result;
		const previous = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(previous) || isNaN(current)) return;

		switch (this.operator) {
			case "+":
				result = previous + current;
				break;

			case "-":
				result = previous - current;
				break;

			case "×":
				result = previous * current;
				break;

			case "÷":
				result = previous / current;
				break;

			default:
				return;
		}

		this.currentOperand = parseFloat(result.toFixed(5));
		this.operator = undefined;
		this.previousOperand = "";
	}

	getDisplayNumber(num) {
		const stringNumber = num.toString();
		const integerDigits = parseFloat(stringNumber.split('.')[0]);
		const decimalDigits = stringNumber.split('.')[1];
		let intScreen;
		if (isNaN(integerDigits)) {
			intScreen = '';
		} else {
			intScreen = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
		}
		if (decimalDigits != null) {
			return `${intScreen}.${decimalDigits}`;
		} else {
			return intScreen;
		}
	}

	changeScreen() {
		this.currentOperandText.innerText =
			this.getDisplayNumber(this.currentOperand);
		if (this.operator != null) {
			this.previousOperandText.innerText =
				`${this.getDisplayNumber(this.previousOperand)} ${this.operator}`;
		} else {
			this.previousOperandText.innerText = '';
		}
	}
}


/*
//function button event listener
document.querySelector('#eq').addEventListener('click', operate)
document.querySelector('#dot').addEventListener('click', inputDot)
document.querySelector('#plusmn').addEventListener('click', changeSign)
document.querySelector('#AC').addEventListener('click', clearAll)
document.querySelector('#CE').addEventListener('click', clearDisplay)
document.querySelector('#del').addEventListener('click', delLast)
*/

//function button event listener
const equalButton = document.querySelector('#eq')
//const document.querySelector('#dot')
//const document.querySelector('#plusmn')
const allClearButton = document.querySelector('#AC')
const clearEntryButton = document.querySelector('#CE')
//const document.querySelector('#del').addEventListener('click', delLast)

//number button event listener
const numBtns = document.querySelectorAll('.num');
numBtns.forEach(button =>{
	button.addEventListener('click', () => {
		calculator.insert(button.innerText);
		calculator.changeScreen();
	});
});

//operator button event listener
const operBtns = document.querySelectorAll('.oper');
operBtns.forEach(button =>{
	button.addEventListener('click', (e) =>{
		operator = button.id
		calculator.getOperator(operator);
	});
});

//keypress event listener
document.addEventListener('keydown', (event) => {
	const { key } = event;
	if(isNaN(key)){
		if (key === "Enter")equal()
		if (key == "+"){
			operator = 'add'
			sign = "\u002B"
			calculator.getOperator(operator);
		}
		if (key == "-"){
			operator = 'subtract'
			sign = "\u2212"
			calculator.getOperator(operator);
		}
		if (key == "*"){
			operator = 'multiply'
			sign = "\u00D7"
			calculator.getOperator(operator);
		}
		if (key == '/'){
			operator = 'divide'
			sign = "\u00F7"
			calculator.getOperator(operator);
		}
		if (key == 'Escape')allClear()
		if (key == 'Backspace')clearEntry()
	}else{
		value = key
		addDisplay()
	}
});
