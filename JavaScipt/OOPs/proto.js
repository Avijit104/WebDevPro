const computer = {
  cpu: 12,
};
const lenovo = {
  screen: "HD",
  __proto__: computer,
};
const avi = {
  __proto__: lenovo,
};

console.log("computer ", computer.__proto__);
console.log("lenovo ", lenovo.__proto__);
console.log("avi ", avi.__proto__);

// Object in js
console.log(Object);

const genericCar = {
  tyre: 4,
};
console.log(genericCar);
console.log(Object.getPrototypeOf(genericCar));

const tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(tesla, ", tesla prototype: ", Object.getPrototypeOf(tesla));
console.log(tesla.tyre);
