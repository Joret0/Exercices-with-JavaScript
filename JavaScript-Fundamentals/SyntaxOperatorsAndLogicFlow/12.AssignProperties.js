function assignProperties(args) {
    let object = new Object();
    for (let i = 0; i < args.length - 1; i++) {
        if (i % 2 === 0) {
            object[args[i]] = args[i + 1];
        }
    }
    console.log(object);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);