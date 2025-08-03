// Encapsulation
class Bank {
  #balance = 0;

  deposit(ammount) {
    this.#balance = this.#balance + ammount;
    return this.#getBalance();
  }

  #getBalance() {
    return `Your account balance is $${this.#balance}`;
  }

  withdrawl(ammount) {
    if (ammount > this.#balance) {
      console.log("Not enough balance!!!!");
    } else {
      this.#balance = this.#balance - ammount;
      return this.#getBalance();
    }
  }
}

const account = new Bank();
console.log(account.deposit(500));
console.log(account.withdrawl(200));

// this throws an error because noone has access to #balance data and #getBalance method outside of the class
// console.log(account.#getBalance());
// console.log(account.#balance);
