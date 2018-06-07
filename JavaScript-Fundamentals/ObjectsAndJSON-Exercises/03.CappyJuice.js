function cappyJuice(input) {

    let map = new Map();
    let juiceBottles = new Map();

    function createBottles(quantity, map, key) {
        quantity -= 1000;
        map.set(key, quantity);
        if (!juiceBottles.has(key)) {
            juiceBottles.set(key, 0);
        }
        juiceBottles.set(key, juiceBottles.get(key) + 1);
        if (quantity >= 1000) {
            createBottles(quantity, map, key);
        }
    }

    for (let line of input) {
        line = line.split(" => ");
        if (!map.has(line[0])) {
            map.set(line[0], 0);
        }
        let quantity = map.get(line[0]) + Number(line[1]);
        if (quantity >= 1000) {
            createBottles(quantity, map, line[0]);
        } else {
            map.set(line[0], quantity);
        }
    }

    for (let [juice, bottles] of juiceBottles) {
        console.log(`${juice} => ${bottles}`);
    }
}

cappyJuice(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600',
 'Strawberry => 549']);