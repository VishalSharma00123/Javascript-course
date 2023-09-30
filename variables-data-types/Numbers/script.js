const num = new Number(5.8997)
a = num.toString()
console.log(a);//'5'
console.log(typeof a);//string
console.log(num);

// toFixed() return the specified number of value after the decimal point
console.log(num.toFixed(2));//5.90

// toPrecision() is similar to toFixed() but it consider  overall length of the number
console.log(num.toPrecision(2));//5.9

console.log(num.toExponential(2));

console.log(num.toLocaleString('en-IN'));

// the larger possible number we can use in Number is
b = Number.MAX_VALUE;
console.log(b);//1.7976931348623157e+308

// the smallest possible number we can use in Number is
c = Number.MIN_VALUE;
console.log(c);//5e-324

// sqrt()
d = Math.sqrt(6)
console.log(d);//2.449489742783178

// abs() convert -ve to +ve
e = Math.abs(-5)
console.log(e);//5

// round() roundoff to the nearest possible value
f = Math.round(4.5)
console.log(f);//5

// ceil() it will round off to the one value ahead 
let g = '4.1'
g = Math.ceil(g)
console.log(g);//5

// floor() it will round off to the one value behind
let h = '4.9'
h = Math.floor(h)
console.log(h);//4

// pow()
i = Math.pow(2, 7)//2 raise 7
console.log(i);//128

// min() return the smallest numeber
j = Math.min(2, 3, 4, 0, 1, 4, 5)
console.log(j);

// max() return the larget number

k = Math.max(2, 1, 3, 45, 2, 3, 0)
console.log(k);

// random() returns the random value


console.log(Math.floor(Math.random() * 100 + 1));