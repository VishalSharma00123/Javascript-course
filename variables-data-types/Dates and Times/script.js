// Date() displays the current date time year place ans standard time
//we can set the date manually also
let a;
a = new Date()

console.log(a);
console.log(typeof a);//object ->it is a type of string

a = a.toString()

console.log(typeof a);//string

let b;
b = new Date(2021, 0, 11, 12, 30, 59)//Date(year,jan,nov,hour,min,second)
console.log(b);
// instead of doing above can place everything inside string
c = new Date('2021-01-11T12:30:59')
console.log(c);

// 3rd method
d = new Date('01/11/2021 12:30:59')
console.log(d);