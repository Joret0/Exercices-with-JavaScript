function autoEngineering(input) {
    let map = new Map();
    for (let line of input) {
        line = line.split(" | ").filter(w => w !== "");
        if (!map.has(line[0])) {
            map.set(line[0], new Map());
        }
        if (!map.get(line[0]).has(line[1])) {
            map.get(line[0]).set(line[1], 0);
        }
        let num = map.get(line[0]).get(line[1]) + Number(line[2]);
        map.get(line[0]).set(line[1], num);
    }

    //map = new Map([...map.entries()].sort());

    for (let [key, valMap] of map) {
        console.log(key);
        for (let [innKey, innVal] of valMap) {
            console.log(`###${innKey} -> ${innVal}`);
        }
    }
}

autoEngineering(['Audi | Q7 | 1000',
                'Audi | Q6 | 100',
                'BMW | X5 | 1000',
                'BMW | X6 | 100',
                'Citroen | C4 | 123',
                'Volga | GAZ-24 | 1000000',
                'Lada | Niva | 1000000',
                'Lada | Jigula | 1000000',
                'Citroen | C4 | 22',
                'Citroen | C5 | 10']);