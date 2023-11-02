// Create the classes - Order, Person, and Customer
class Order {
  constructor() {
    this.burgerCount = this.randomBurgers();
  }
  // Generate a random number of burgers between `1` and `20`
  randomBurgers() {
    return Math.floor(Math.random() * 20) + 1;
  }
}

// Define the Person class
class Person {
  constructor() {
    this.customerName = this.randomName();
  }
  randomName() {
    const asCustomers = [
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

// Define the Customer class inheriting from Person
class Customer extends Person {
  constructor() {
    super();
    this.order = new Order();
  }
}

// Create the queue and CustomerOrders array
let queue = [];

// Create an array to hold the customers' orders
let CustomerOrders = [];

document.getElementById("executeButton").addEventListener("click", function () {
  // Generate 100 random customers and add them to the queue

  for (let i = 0; i < 100; i++) {
    let customer = new Customer();
    queue.push(customer);
  }

  // Process the customers' orders
  queue.forEach((customer) => {
    let customerName = customer.customerName;
    let burgerCount = customer.order.burgerCount;

    let existingCustomer = CustomerOrders.find(
      (cust) => cust[0] === customerName
    );

    if (existingCustomer) {
      existingCustomer[1] += burgerCount;
    } else {
      CustomerOrders.push([customerName, burgerCount]);
    }
  });

  // Sort the order by the number of burgers ordered
  CustomerOrders.sort((a, b) => b[1] - a[1]);

  // Display the contents of customer orders in descending order
  CustomerOrders.forEach((customer) => {
    let [customerName, burgerCount] = customer;
    let formattedName = customerName.padEnd(50, " ");
    document.getElementById(
      "output"
    ).innerHTML += `${formattedName} ${burgerCount
      .toString()
      .padEnd(5, " ")}<br>`;
  });
});
