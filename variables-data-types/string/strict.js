let x
const name = 'Vishal'
const age = 21

x = 'Hell, my name is ' + name + ' and i am ' + age + ' Years old'
// we can also use backtick(literals)
x = `Hello, my name is ${name} and i am ${age} Years old`
console.log(x);

// string Properties and Methods

// new String() creates and object
const s = new String('Hello World');
console.log(s);
console.log(s[6]);//W , we can access every character of 'Hello World' bcz every character is now stored in the object
// length

let a = "Hello world"
a = a.length
console.log(a);//11

// prototype
let b = s.__proto__;
// __proto__ contains all this method we can see all the methods in the console and use them
console.log(b);
b = s.indexOf('o')
console.log(b);
let c = s.substring(0, 7)
console.log(c);
let d = s.slice(-11, -6)
console.log(d);

// trim() is used to remove extra blank spaces
let e = "           Hello world"
e = e.trim();
console.log(e);

// replace the string with something using replace() method

let f = 'Hello World'
f = f.replace('World', 'Vishal')
console.log(f);

// we can also check whether some string letter or word  is present or not
// it checkes whether 'Hello' is present or not 
let g = 'Hello World'
g = g.includes('Hello')
console.log(g);

// split()
let h = 'Hello Vishal'
h = h.split('')
console.log(h);