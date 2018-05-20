function evenOdd(number) {

    if (number % 2 === 0) {
        console.log("even");
    } else if (number % 1 === 0) {
        console.log("odd");
    } else {
        console.log("invalid");
    }
}

evenOdd(5);