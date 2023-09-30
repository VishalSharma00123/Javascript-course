// map() modifies the existing array and then returns a new array

const numbers = [1, 2, 3, 4, 5];

const doublednumbers = numbers.map(number => number * 2)

console.log(doublednumbers);//[2, 4, 6, 8, 10]

// eg 2

const stringvalue = numbers.map(number => `number ` + number)

console.log(stringvalue);

// ['number 1', 'number 2', 'number 3', 'number 4', 'number 5']

