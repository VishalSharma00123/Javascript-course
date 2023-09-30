const number = [23, 34, 4, 8, 9]
console.log(number);

// Array constructor
const fruits = new Array('apple', 'orange', 'grapes', 'pineapple');
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[3]);

console.log(`My favourite fruits is ${fruits[2]}`);
// My favourite fruits is grapes

// modifying the array
fruits[2] = "mango"
console.log(fruits);

// insert the at last index of the array
fruits[fruits.length] = "banana"
console.log(fruits);//) ['apple', 'orange', 'mango', 'pineapple', 'banana']