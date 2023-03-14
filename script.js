let storedValue = "";
let currentValue = "";
let currentOperator = "";
const display = document.getElementById("result");

function clearDisplay() {
  display.textContent = "";
  currentValue = "";
}

function updateDisplay() {
  display.textContent = currentValue;
}

function operate(storedValue, currentValue, operator) {
  display.textContent = currentValue;
  let parsedStored = parseFloat(storedValue);
  let parsedCurrent = parseFloat(currentValue);
  if (operator === "+") {
    display.textContent = storedValue + currentValue;
  }
  if (operator === "-") {
    display.textContent = storedValue - currentValue;
  }
  if (operator === "*") {
    display.textContent = storedValue * currentValue;
  }
  if (operator === "/") {
    display.textContent = storedValue / currentValue;
  }
}

function appendCurrent(newCurrent) {
  currentValue = currentValue.concat(newCurrent);
  updateDisplay();
}

function updateOperator(newOperator) {
  storedValue = currentValue;
  clearDisplay();
  currentOperator = newOperator;
}
