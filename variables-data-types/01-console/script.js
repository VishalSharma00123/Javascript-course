console.group('includes everything')
console.log(100);//printing number
console.log("string");//printing string
console.log(20, "hello", true);
console.groupEnd();

// shows alert message
console.error('Alert');
// shows warning message
console.warn('Warning');

const a = { name: "Brad", email: "vishal@gmail.com" };
console.table(a);//dispa

// we can add css stylig also by using %c
const styles = 'padding:10px; background-color:white;color:red ;border:10px solid blue:;margin:2rem'

console.log('%cHello World', styles);

let score = 31
score = 90


if (true) {
    score = score + 1
}

console.log(score);

const x = 200
// x = 566//we cannot reassign the value decalred with the keyword cont

// push() method is used to push an element into an end of the array

const arr = [1, 2, 3, 4, 5]
arr.push(6)
console.log(arr);


// unshift() is used to add element in the beginning of the array

const arr1 = [2, 3, 4, 5, 6]
arr1.unshift(1)
console.log(arr1);

const person = {
    name: 'vidhal'
}

person.name = 'John';
person.email = "vishal2k21@gmail.com"

console.log(person);