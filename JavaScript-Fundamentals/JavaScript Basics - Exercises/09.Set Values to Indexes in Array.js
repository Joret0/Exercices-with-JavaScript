function solve(args) {
    let arrLength = Number(args[0]);
    let  resultArray = [];
    for (let i = 1; i < args.length; i++) {
        let indexOfDashes = args[i].indexOf('-');
        let index = Number(args[i].substr(0, indexOfDashes - 1));
        let element = args[i].substr(indexOfDashes + 1);
        resultArray[index] = element;
    }

    for (let i = 0; i < arrLength; i++) {
        if (resultArray[i] === undefined) {
            resultArray[i] = 0;
        }
    }

    console.log(resultArray.join('\n'));
}