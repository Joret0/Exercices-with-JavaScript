function currencyFormat(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {
        return symbol + " " + result;
    } else {
        return result + " " + symbol;
    }
}

function dollarsFunc(formatter) {
    return function (value) {
        return formatter(",", "$", true, value);
    }
}

let dollars = dollarsFunc(currencyFormat);
console.log(dollars(1000));