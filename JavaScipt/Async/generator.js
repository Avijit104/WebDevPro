function* newGen() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = newGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // undefined
