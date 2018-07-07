function tickets(array, type) {
    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let line of array) {
        let[destination, price, status] = line.split("|");
        result.push(new Ticket(destination, price, status));
    }

    return result.sort((a,b) => a[type] > b[type]);
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'
));