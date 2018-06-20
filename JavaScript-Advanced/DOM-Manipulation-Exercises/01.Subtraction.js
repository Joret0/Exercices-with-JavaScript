function subtract() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let sum = firstNumber - secondNumber;
    let result = document.getElementById("result");
    result.textContent = sum;
}