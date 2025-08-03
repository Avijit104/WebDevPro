function Person(name, age) {
  this.name = name;
  this.age = age;

  this.print = function () {
    return `Hello, this is ${this.name} and my age is ${age}`;
  };
}

const raj = new Person("raj", 23);
const Avijit = new Person("avijit", 11);

console.log(raj.print());
console.log(Avijit);

function Animal(sp) {
  this.sp = sp;
}

Animal.prototype.sound = function () {
  return `this is sound of ${this.sp}`;
};

const dog = new Animal("dog");
console.log(dog.sound());

const cat = new Animal("Cat");
console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    console.log("lawde new keyword use karle ");
  }
  console.log("target holds", new.target);
  this.name = name;
}

const tea = new Drink("tea");
const coffee = Drink("coffee");
