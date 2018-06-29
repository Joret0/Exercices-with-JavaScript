function aggregate(array) {
    console.log("Sum = " + reduce(array, (a,b) => a + b));
    console.log("Min = " + reduce(array, (a,b) => a > b ? b : a));
    console.log("Max = " + reduce(array, (a,b) => a > b ? a : b));
    console.log("Product = " + reduce(array, (a,b) => a * b));
    console.log("Join = " + reduce(array, (a,b) => "" + a + b));

    function reduce(arr, func) {
        let result = arr[0];
        for (let element of arr.slice(1)) {
            result = func(result, element);
        }
        return result;
    }
}