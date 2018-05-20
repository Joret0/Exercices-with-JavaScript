function aggregateElements(args) {
    let sum = 0;
    let concat = "";
    let rev = 0;

    for (let i = 0; i < args.length; i++) {
        sum += Number(args[i]);
        concat += args[i];
        rev += 1 / Number(args[i]);
    }

    console.log(sum);
    console.log(rev);
    console.log(concat);
}

aggregateElements([1, 2, 3]);