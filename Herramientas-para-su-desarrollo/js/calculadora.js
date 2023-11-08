let displayValue = '0';

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById('display').querySelector('h1').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').querySelector('h1').innerText = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').querySelector('h1').innerText = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').querySelector('h1').innerText = displayValue;
    }
}

function changeSign() {
    if (!isNaN(displayValue)) {
        displayValue = (parseFloat(displayValue) * -1).toString();
        document.getElementById('display').querySelector('h1').innerText = displayValue;
    }
}

function sqrt() {
    try {
        displayValue = Math.sqrt(eval(displayValue));
        document.getElementById('display').querySelector('h1').innerText = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').querySelector('h1').innerText = displayValue;
    }
}
