
//mathematical functions
let add = (a,b) => a+b
let subtract = (a,b) => a-b
let multiply = (a,b) => a*b
let divide = (a,b) => b != 0 ? a/b : "ERROR: div/0"
let operate = (oper, a, b) => oper(a,b)
//string storage
let display = document.querySelector("#display");
let displayValue = "";
let a = "";
let b = "";
let tempResult = operate(oper, a, b);

