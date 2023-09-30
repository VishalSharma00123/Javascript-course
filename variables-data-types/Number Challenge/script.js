// x -> random value between 1 to 100
// y -> random value between 1 to 50

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);
console.log(x);
console.log(y);
let sum = x + y
let dif = x - y
let quotient = x / y
let remainder = x % y
let product = x * y

console.log(`${x} + ${y} = ${sum}`);
console.log(`${x} - ${y} = ${dif}`);
console.log(`${x} / ${y} = ${quotient}`);
console.log(`${x} % ${y} = ${remainder}`);
console.log(`${x} * ${y} = ${product}`);