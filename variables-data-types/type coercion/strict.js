// coercion means conversion of data type to another
let x;
x = 5 + '5';
console.log(x);//55
// In above code first value string but whenever it sees a string it converts the number into string implicitly and then it concatenate with the 2nd value 

let y;
y = 5 + Number('5')//here we will typecast string into number & then later add it to the add firstnumebr
console.log(y);//10

// when we try to multiply a string value with the numebr values the higher priority goes to the number only
let z
z = 5 * '5'
// z = 5 * 'Hello' displays NaN(not a number)
console.log(z);//25


