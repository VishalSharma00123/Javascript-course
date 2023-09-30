// || -> assigns the right side value only if the left is a falsy

// method 1 using if and !
let a = false
if (!a) {
    a = 10
}
console.log(a);//10

// method 2 using ||
a = false
// a -> a || 10 instead of writing like this we can write like this
a ||= 10
console.log(a);//10

// && -> assigns the right side value only if the left is truthy
x = true
if (x) {
    x = 20
}
console.log(x);//20

x = true;
// x = x && 20
x &&= 20
console.log(x);//20


// ?? -> assigns the right side value only if the left side is null or undefined

let c = null;

c = c ?? 20

console.log(c);//20 bcz left side is null

let d = 90

d ??= 87
console.log(d);//90 bcz left doesnot contain null or undefined
