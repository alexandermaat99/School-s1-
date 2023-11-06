class Order {
  constructor() {
    this.burger_count = this.randomBurgers();
  }

  randomBurgers() {
    return Math.floor(Math.random() * 20) + 1;
  }
}

class Person {
  constructor() {
    this.customer_name = this.randomName();
  }

  randomName() {
    let asCustomers = [
      "Jefe",
      "El Guapo",
      "Lucky Day",
      "Ned Nederlander",
      "Dusty Bottoms",
      "Harry Flugleman",
      "Carmen",
      "Invisible Swordsman",
      "Singing Bush",
    ];
    return asCustomers[Math.floor(Math.random() * asCustomers.length)];
  }
}

class Customer extends Person {
  constructor() {
    super();
    this.order = new Order();
  }
}

let customerQueue = []; // Queue of customers

let customerOrders = [];

document
  .getElementById("processButton")
  .addEventListener("click", processCustomers);

function processCustomers() {
  for (let i = 0; i < 100; i++) {
    let newCustomer = new Customer();
    customerQueue.push(newCustomer);
  }

  while (customerQueue.length > 0) {
    let currentCustomer = customerQueue.shift();
    let existingCustomer = customerOrders.find(
      (cust) => cust[0] === currentCustomer.customer_name
    );

    if (existingCustomer) {
      existingCustomer[1] += currentCustomer.order.burger_count;
    } else {
      customerOrders.push([
        currentCustomer.customer_name,
        currentCustomer.order.burger_count,
      ]);
    }
  }

  // customerOrders.sort((a, b) => b[1] - a[1]);
  customerOrders.sort((c, d) => c[1] - d[1]);

  displayCustomerOrders();
}

function displayCustomerOrders() {
  let output = document.getElementById("output");

  customerOrders.forEach((customer) => {
    let burgers = customer[1].toString();
    output.innerHTML += `<div style="display: flex;"><div style="width: 150px;">${customer[0]}</div><div>${burgers}</div></div><br>`;
  });
}
