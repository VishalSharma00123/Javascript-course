
// convert number into string using + or parseInt() or Number() method
const value = +'100'

console.log(value, typeof value);

let value1 = '90'

value1 = parseInt(value1)
console.log(value1, typeof value1);

let value2 = '189'
value2 = Number(value2)
console.log(value2, typeof value2);
// convert number to string using toString() or String()

let amount = 100

amount = amount.toString()

console.log(amount, typeof amount);

let myamount = 1000

myamount = String(myamount)

console.log(myamount, typeof myamount);

// changing string to decimal

let values = '900.89'
values = parseFloat(values)// dont use parseInt() for converting string into decimal instead use parseFloat()
console.log(values, typeof values);

// when we try to access a number but instead if we get string any other data type values it will show NaN(not a number)
// eg

let store = 'hello'

store = parseInt(store)
console.log(store, typeof store);

// here in above example we are trying to pass the string value inside the parseInt() which is not valid so it displays NaN