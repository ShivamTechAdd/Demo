

document.getElementById('convert').onclick = function () {
    let temp = parseFloat(document.getElementById('temp').value);
    let unit = document.getElementById('unit').value;

    let convertedTemp = unit === 'C'
        ? (temp * 9 / 5) + 32          // Celsius to Fahrenheit
        : (temp - 32) * 5 / 9;         // Fahrenheit to Celsius

    document.getElementById('converted').textContent = convertedTemp.toFixed(2);
};
