function cookingByNumbers(args) {

     let [num, ope1, ope2, ope3, ope4, ope5] = [Number(args[0]), args[1], args[2], args[3], args[4], args[5]];

     let number = num;

     let chop = (num) => num / 2;
     let dice = (num) => Math.sqrt(num);
     let spice = (num) => num + 1;
     let bake = (num) => num * 3;
     let fillet = (num) =>  num * 0.8;

    for (let ope of [ope1, ope2, ope3, ope4, ope5]) {

        switch (ope) {
            case 'chop': number = chop(number);
                console.log(number);
                break;
            case 'dice': number = dice(number);
                console.log(number);
                break;
            case 'spice': number = spice(number);
                console.log(number);
                break
            case 'bake': number = bake(number);
                console.log(number);
                break;
            case 'fillet': number = fillet(number);
                console.log(number);
                break;
        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'fillet'])