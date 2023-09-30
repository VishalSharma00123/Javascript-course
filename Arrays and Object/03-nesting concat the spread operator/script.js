const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'rasberry']

fruits.push(berries)
console.log(fruits);
// here in the above the we have pushed the berries array into 3rd index of the fruits array
// in the console it looks like this (4) ['apple', 'pear', 'orange', Array(3)]

// if we try to access 3rd index
x = fruits[3]
console.log(x);// ['strawberry', 'blueberry', 'rasberry']


a = fruits[3][0]
console.log(a)//strawberry

console.log(fruits[3][1]);//blueberry

console.log(fruits[3][2]);//rasberry

// nesting both the arrays

const allFruits = [fruits, berries]
console.log(allFruits);
// o/p will look like this
// (2) [Array(4), Array(3)]
// as we can see there is only two index 0th index stores fruits and 1st index stores berries and this is called nesting

// accessing 0th index
console.log(allFruits[0]);// ['apple', 'pear', 'orange', Array(3)]

console.log(allFruits[0][1]);//pear

// Cancatinating the arrays

// when we cancat arrays we will get one single array as we know cancat means adding

console.log(fruits.concat(berries));
// ['apple', 'pear', 'orange', Array(3), 'strawberry', 'blueberry', 'rasberry']

// concate using spread operator

const store = [...fruits, ...berries]
console.log(store);
// ['apple', 'pear', 'orange', Array(3), 'strawberry', 'blueberry', 'rasberry']

// flat() is used to flatten the array
const arr = [1, 2, [2, 3], [90, 89], [12, 34]];
console.log(arr.flat());

// 
// In JavaScript, the isArray() method is a built-in function that is used to determine whether a given value is an array or not. It is a useful tool for checking the data type of a variable to ensure that it is indeed an array before performing array-specific operations on it.

console.log(Array.isArray(fruits));//true,bcz fruits ia an arrya which we defined already
// console.log(Array.isArray(array));//script.js:55 Uncaught ReferenceError: array is not defined we have'nt defnes any array named array


// Array.from() creates an array 
let mystore = Array.from('123455');
console.log(mystore);
// ['1', '2', '3', '4', '5']


const a1 = 1;
const b = 2;
const c = 3;

// Array.of() creates an array 
myarray = Array.of(a1, b, c)
console.log(myarray);
//  [1, 2, 3]



