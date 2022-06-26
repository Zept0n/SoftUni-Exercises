function tickets(strArray, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let tickets = [];
    for (let index = 0; index < strArray.length; index++) {
        const [destination, price, status] = strArray[index].split('|');
        const currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);
    }
    if (sortCriteria=='price') {
        return  tickets.sort((a, b) => a[sortCriteria]-(b[sortCriteria]));
    } else {
        return tickets.sort((a, b) => a[sortCriteria].localeCompare((b[sortCriteria])));
    }
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'));




console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
);