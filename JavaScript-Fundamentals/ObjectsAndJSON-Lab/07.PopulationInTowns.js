function populationInTowns(input) {
    let towns = new Map();
    for (let i = 0; i < input.length; i++) {
        let [town, population] = input[i].split('<->');
        population = Number(population);
        if (towns.has(town)) {
            towns.set(town, towns.get(town) + population);
        } else {
            towns.set(town, population);
        }
    }
    for (let [town, population] of towns) {
        console.log(`${town}: ${population}`);
    }
}