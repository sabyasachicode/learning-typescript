let airlineSeat : 'window' | 'middle' |'aisle' = 'window';

console.log(airlineSeat);

let currentOrder:string | undefined;

let orders = ['10', '20', '30'];

for (let order of orders) {
    if(order == "20") {
        currentOrder = order;
    }
}

console.log(currentOrder);