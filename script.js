let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperation(operation) {
    appendNumber(operation)
    if (currentInput === '') return;
    if (currentOperation !== null) calculate();
    firstOperand = parseFloat(currentInput);
    currentOperation = operation;
    shouldResetDisplay = true;
}

function calculate() {
    if (currentOperation === null || shouldResetDisplay) return;
    secondOperand = parseFloat(currentInput);
    let result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    updateDisplay(result);
    currentInput = result;
    currentOperation = null;
}

function updateDisplay(value) {
    document.getElementById('result').value = value;
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay('');
}

function deleteNumber() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay(currentInput);
}
