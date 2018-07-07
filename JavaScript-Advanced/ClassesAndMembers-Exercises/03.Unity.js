class Rat {
    constructor(name) {
        this.name = name;
        this.uniteRats = [];
    }

    unite(rat) {
        if (rat instanceof Rat) {
            this.uniteRats.push(rat);
        }
    }

    getRats() {
        return this.uniteRats;
    }

    toString() {
        let array = this.uniteRats;
        array.unshift(this.name);
        return array.join("\n##");
    }
}

let rat = new Rat("One");
rat.unite(new Rat("Two"));
rat.unite(new Rat("Three"));
console.log(rat.toString());