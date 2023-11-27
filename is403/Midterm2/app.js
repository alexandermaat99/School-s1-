//global array for accounts
var accounts = [];

//global array for transactions
var transactions = [];

// create the account class
class Account {
  constructor(custFirstName, custLastName, acctNumber, pin) {
    this.account = acctNumber;
    this.customer = new Customer(custFirstName, custLastName, pin);
    this.balance = 0;
    this.transactions = [];
    accounts.push(this);
  }
}

// create the person class
class Person {
  constructor(custFirstName, custLastName) {
    this.first = custFirstName;
    this.last = custLastName;
  }
}

//create the customer class based on person class
class Customer extends Person {
  constructor(custFirstName, custLastName, pin) {
    super(custFirstName, custLastName);
    this.pin = pin;
  }
}

//create the transactions class
class Transaction {
  constructor(type, amount) {
    this.num = Transaction.getTransNum();
    this.type = type; //D-deposit W-withdraw)
    this.amount = amount;
    transactions.push(this);
  }

  static getTransNum() {
    return ++Transaction.transNum;
  }
}

Transaction.transNum = 0;

//create a new account wiht the newAcct function
function newAcct() {
  let custFirstName = document.getElementById("custFirstName").value;
  let custLastname = document.getElementById("custLastName").value;
  let acctNumber = document.getElementById("acctNumber").value;
  let pin = document.getElementById("pin").value;

  new Account(custFirstName, custLastname, acctNumber, pin);

  document.getElementById("custFirstName").value = "";
  document.getElementById("custLastName").value = "";
  document.getElementById("acctNumber").value = "";
  document.getElementById("pin").value = "";

  document.getElementById("custFirstName").focus();
}

//create a new account wiht the deposit function
function deposit() {
  let acctNumber = document.getElementById("depositAcctNumber").value;
  let amount = parseFloat(document.getElementById("depositAmount").value);

  let account = accounts.find((acc) => acc.account === acctNumber);
  if (account) {
    account.balance += amount;
    new Transaction("D", amount);

    document.getElementById("depositAcctNumber").value = "";
    document.getElementById("depositAmount").value = "";
    document.getElementById("depositAcctNumber").focus();
  } else {
    alert("Account not found.");
  }
}

//create a new account with the withdraw function
function withdraw() {
  let acctNumber = document.getElementById("withdrawAcctNumber").value;
  let amount = parseFloat(document.getElementById("withdrawAmount").value);

  let account = accounts.find((acc) => acc.account === acctNumber);
  if (account) {
    account.balance -= amount;
    new Transaction("W", amount);

    document.getElementById("withdrawAcctNumber").value = "";
    document.getElementById("withdrawAmmount").value = "";
    document.getElementById("withdrawAcctNumber").focus();
  } else {
    alert("Account not found.");
  }
}

//display the results of certian account using the displayTrans Function
function displayTrans() {
  let acctNumber = document.getElementById("displayAccountNumber").value;

  let account = accounts.find((acc) => acc.account === acctNumber);
  if (account) {
    let output = `Customer: ${account.customer.first} ${account.customer.last} <br> `;
    account.transactions.forEach((transaction) => {
      output += `Transaction: ${transaction.num} ${transaction.type} ${transaction.amount} <br>`;
    });
    output += `Balance: ${account.balance}`;

    document.getElementById("transactions").innerHTML = output;

    document.getElementById("displayAccountNumber").value = "";
    document.getElementById("displayAccountNumber").focus();
  } else {
    document.getElementById("transactions").innerHTML = "Account not found";
  }
}

// Display the largest amount using the displayLargestAccountFunction
function displayLargestAccount() {
  let largestBalance = 0;
  let largestAccount = null;

  accounts.forEach((account) => {
    if (account.balance > largestBalance) {
      largestBalance = account.balance;
      largestAccount = account;
    }
  });
  if (largestAccount) {
    document.getElementById(
      "transactions"
    ).innerHTML = `Largest Account is: ${largestAccount.account} ${largestAccount.customer.first} ${largestAccount.customer.last} ${largestAccount.balance}`;
  } else {
    alert("No accounts found");
  }
}
