function largest3Numbers(args) {
    args = args.map(Number)
        .sort((a, b) => b - a);

    let total = Math.min(args.length, 3);

    for (let  i = 0; i < total; i++) {
        console.log(args[i])
    }
}

largest3Numbers([
    '10', '20', '30', '100', '40', '33', '4'
])
