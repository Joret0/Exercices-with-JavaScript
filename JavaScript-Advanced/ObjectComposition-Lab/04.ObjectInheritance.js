function objectInheritance(input) {
    let solve = (() => {
        let cars = new Map();

        function create(name, prop, prototype) {
            if (prototype === undefined) {
                cars.set(name, {});
                return;
            }
            cars.set(name, Object.create(cars.get(prototype)));
        }
        function set(name, prop, value) {
            cars.get(name)[prop] = value;
        }
        
        function print(name) {
            let array = [];
            for (let car in cars.get(name)) {
                array.push(car + ":" + cars.get(name)[car]);
            }
            console.log(array.join(", "));
        }
        
        return {create, set, print};
    })();
    for (let line of input) {
        let tokens = line.split(" ");
        let command = tokens.shift();
        solve[command](...tokens);
    }
}

objectInheritance(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);