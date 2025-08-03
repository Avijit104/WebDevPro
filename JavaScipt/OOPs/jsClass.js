// Basic js object
const car = {
  name: "Toyota",
  model: "Fortuner",
  year: 2000,
  start: function () {
    return `${this.name} ${this.model} is started in year ${this.year}`;
  },
};

console.log(car.start());

// Basic js constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const jhon = new Person("Jhon Doe", 20);
console.log(jhon);

// js Class
class Vehical {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  start() {
    return `${this.model} is a type of ${this.name}`;
  }
}

const vehOne = new Vehical("totoya", "corolla");
console.log(vehOne.name);

// inheritance

class Car extends Vehical {
  dirve() {
    return `${this.model} is an example of inheritance`;
  }
}

const myCar = new Car("Tata", "Nano");
console.log(myCar.start());
console.log(myCar.dirve());
