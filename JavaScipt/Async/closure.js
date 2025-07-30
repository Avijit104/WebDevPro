function outter() {
  let counter = 5;
  console.log(counter);
  return function inner() {
    counter++;
    return counter;
  };
}

const counter = outter(); //inner function retains the counter variable
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
