const unitConvertor = {
    mToFt: function(meters) {
        return meters * 3.28084;
    },
    kgToP: function(kilogram) {
        return kilogram * 2.20462;
    },
    cToF: function(celsius) {
        return (celsius * 9 / 5) + 32;
    }
};

document.getElementById('convert').onclick = () => {
    let inputVal = parseFloat(document.getElementById('inputValue').value);
    let conversionType = document.getElementById('conversion').value;

    let convertedValue =
        conversionType === 'mToFt' ? unitConvertor.mToFt(inputVal) :
        conversionType === 'kgToP' ? unitConvertor.kgToP(inputVal) :
        unitConvertor.cToF(inputVal);

    document.getElementById('convertedValue').textContent = convertedValue.toFixed(2);
};






