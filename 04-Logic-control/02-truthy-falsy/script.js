const email = 'vishal@gmail.com'

if (email) {
    console.log('you passed and email');
    // you passed and email
}

console.log(Boolean(email));//o/p -> true ,email exist

const x = 1

if (x) {
    console.log('This is truthy');//true
}
else {
    console.log('This is falsy');//false
}
console.log(Boolean(x));//true


// Truthy and falsy caveats
const children = 0

if (children !== undefined) {
    console.log(`You have ${children} children`);
}
else {
    console.log(`Please enter number of children`);
}

// o/p -> You have 0 children

// eg2 

const children1 = 0

if (children1) {
    console.log(`You have ${children1} children`);
}
else {
    console.log(`Please enter number of children`);
}
// o/p -s> Please enter number of children

// eg3

const children2 = 7

if (!isNaN(children2)) {
    console.log(`You have ${children2} children`);
}
else {
    console.log(`Please enter number of children`);
}

// o/p -> You have 0 children
// ### Truthy Values

// Everything that is not falsy will evaluate to `true`, however, Some of these may surprise you.

// - Everything else that is not falsy
// - true (obviously)
// - '0' (string with 0)
// - 'false' (string with false)
// - ' ' (space in a string)
// - [] (empty array)
// - {} (empty object)
// - function() {} (empty function)


const posts = []
// checking for the empty arrays
if (posts.length > 0) {
    console.log('List Post');
}
else {
    console.log('No Posts To List');
}

// checking for the empty object

const user = {}
const keyarray = Object.keys(user);
console.log(keyarray);
if (keyarray.length > 0) {
    console.log('List User');
}
else {
    console.log('No User');
}

// Loose Equality

console.log(false == 0);//true
console.log('' == 0);//true
console.log(null == undefined);

//Strict Equality

console.log(false === 0);//false
console.log('' === 0);//false
console.log(null === undefined); //false
