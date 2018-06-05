function lowerPrice(input) {
    let cheapestProduct = new Map();
    for (let line of input) {
        [town, product, price] = line.split(" | ").filter(e => e !== "");

        if (!cheapestProduct.has(product)) {
            cheapestProduct.set(product, new Map());
        }
        cheapestProduct.get(product).set(town, Number(price));
    }

    for (let [product, inMap] of cheapestProduct) {
        let lowestPrice = Infinity;
        let townLowestPrice = "";
        for (let [town, price] of inMap) {
            if (price < lowestPrice) {
                lowestPrice = price;
                townLowestPrice = town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${townLowestPrice})`);
    }
}