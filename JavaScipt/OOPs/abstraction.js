// Abstaraction example

class CoffeeMachine {
  startMachine() {
    // internal calculation
    // Db call
    console.log("machine started");
  }
  brewCoffee() {
    // internal calculation
    // Db call
    console.log("coffee brewed");
  }
  startButtonpress() {
    this.startMachine();
    this.brewCoffee();
  }
}

const myMachine = new CoffeeMachine();
myMachine.startButtonpress();
