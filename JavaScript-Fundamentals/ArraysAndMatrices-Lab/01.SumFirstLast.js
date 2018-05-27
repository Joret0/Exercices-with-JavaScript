function sumFirstLast(input) {
    //let a = Number(input.shift());
    //let b = Number(input.pop());
    //console.log(a + b)
    let a = Number(input[input.length-1]);
    let b = Number(input[0]);
    return a + b;
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);