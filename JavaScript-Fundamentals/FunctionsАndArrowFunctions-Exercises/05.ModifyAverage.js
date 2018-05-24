function modifyAverage(n) {
    let numbers = n.toString();

    function getAvg(numbers) {
        let sum = 0;
        for (let num of numbers) {
            sum += Number(num);
        }
        return sum / numbers.length;
    }

    let avg = getAvg(numbers);

    while (avg <= 5) {
        numbers += "9";
        avg = getAvg(numbers);
    }

    console.log(numbers);
}

modifyAverage(5835);