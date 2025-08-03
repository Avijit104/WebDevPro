class Bird {
  fly() {
    return `flying...`;
  }
}
class Penguin extends Bird {
  fly() {
    return `sorry I can't fly`;
  }
}

const penguin = new Penguin();
const sparrow = new Bird();
console.log(penguin.fly());
console.log(sparrow.fly());
