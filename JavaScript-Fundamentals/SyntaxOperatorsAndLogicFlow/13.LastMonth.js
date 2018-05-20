function lastMonth(args) {
    let date = new Date(args[2], args[1] - 1, args[0]);
    date.setDate(date.getDate() - args[0]);
    console.log(date.getDate());
}

lastMonth([20, 3, 2002]);