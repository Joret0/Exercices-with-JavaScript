function storeCatalogue(input) {
    let array = [];
    for (let line of input) {
        line = line.split(" : ").filter(w => w !== "");
        let obj = {
            product : line[0],
            price : Number(line[1])
        };
        array.push(obj);
    }
    array.sort(function (a, b) {
        let first = a.product;
        let second = b.product;
        return first > second ? 1 : first < second ? -1 : 0;
    });
    let letter = "";
    for (let obj of array) {
        let firstLetter = obj.product.substring(0,1);
        if (letter !== firstLetter) {
            console.log(firstLetter);
        }
        console.log(`  ${obj.product}: ${obj.price}`);
        letter = obj.product.substring(0,1);
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);