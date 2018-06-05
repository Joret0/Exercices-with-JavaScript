function sumByTown(input) {
    let obj = {};
    for (let i = 0; i < input.length - 1; i+=2) {
        let [town, income] = [input[i], Number(input[i + 1])];
        if (obj[town] === undefined) {
            obj[town] = income;
        } else {
            obj[town] += income;
        }
    }
    console.log(JSON.stringify(obj));
}

sumByTown(['Sofia', 20, 'Varna', 3, 'sofia', 5, 'varna', 4]);