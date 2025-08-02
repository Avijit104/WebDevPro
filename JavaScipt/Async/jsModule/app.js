import add from "./calculatorModule.js"; // this is default import done for default exports
import { sub, mul } from "./calculatorModule.js"; // this is called nammed import done for not default exports

console.log(add(2, 2));
console.log(sub(2, 2));
console.log(mul(2, 2));
