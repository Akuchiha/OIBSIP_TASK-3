// script.js
function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = "Please enter a valid number";
        return;
    }

    let result;

    switch (inputUnit) {
        case "Celsius":
            if (outputUnit === "Fahrenheit") {
                result = (inputValue * 9/5) + 32;
            } else if (outputUnit === "Kelvin") {
                result = inputValue + 273.15;
            } else {
                result = inputValue;
            }
            break;
        case "Fahrenheit":
            if (outputUnit === "Celsius") {
                result = (inputValue - 32) * 5/9;
            } else if (outputUnit === "Kelvin") {
                result = (inputValue - 32) * 5/9 + 273.15;
            } else {
                result = inputValue;
            }
            break;
        case "Kelvin":
            if (outputUnit === "Celsius") {
                result = inputValue - 273.15;
            } else if (outputUnit === "Fahrenheit") {
                result = (inputValue - 273.15) * 9/5 + 32;
            } else {
                result = inputValue;
            }
            break;
        default:
            break;
    }

    document.getElementById('result').innerHTML = `Result: ${result.toFixed(2)} ${outputUnit}`;
}
