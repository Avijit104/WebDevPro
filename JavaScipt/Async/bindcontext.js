const person = {
  name: "Avijit",
  greet: function (val) {
    console.log(`hello i am ${this.name}`);
    console.log(val);
  },
};
person.greet();

const greetMe = person.greet;
greetMe(30);

const greetMe2 = person.greet.bind(person, 10);
greetMe2();

const person1 = {
  name: "Shivam",
};
const person2 = {
  name: "Ratul",
};
person.greet.call(person1, 20);

person.greet.apply(person2, [50]);
