let displays = document.getElementById('displays');
let currInput = '';

function appendValue(value) {
    currInput += value;
    displays.value = currInput;
}

function clearDisplay() {
    currInput = '';
    displays.value = '';
}

function calculate() {
    try {
        currInput = eval(currInput).toString();
        displays.value = currInput;
    } catch (error) {
        displays.value = 'Error';
    }
}