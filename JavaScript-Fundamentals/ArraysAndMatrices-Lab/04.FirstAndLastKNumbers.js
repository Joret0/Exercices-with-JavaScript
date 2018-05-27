function firstAndLastElements(input) {

    let arrayOne = input.slice(1, Number(input[0]) + 1);
    let arrayTwo = input.slice(-Number(input[0]));

    console.log(arrayOne.join(" "));
    console.log(arrayTwo.join(" "));
}

firstAndLastElements([2, 7, 8, 9]);
firstAndLastElements([3, 6, 7, 8, 9]);