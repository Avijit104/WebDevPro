export default function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}
export function mul(a, b) {
  return a * b;
}

function Animal() {
  Animal.prototype.makeSound = function () {
    return "animal sound";
  };
}
