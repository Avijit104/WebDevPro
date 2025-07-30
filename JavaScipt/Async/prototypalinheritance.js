function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`hello! i am ${this.name}`);
};
const raj = new Person("Raj");
raj.greet();
