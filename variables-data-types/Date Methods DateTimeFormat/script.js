// Date  methods DateTimeFormat

let a;
let b = new Date();
a = b.toString();
console.log(a);
console.log(typeof a);//string
console.log(b);
console.log(typeof b);//object

// getTime() ->display the current time
console.log(b.getTime());//1695723265948

// valueOf() -> ->display the current value
console.log(b.valueOf());//1695723265948

// getFullYear() -> used to access the current year
console.log(b.getFullYear());//2023

// getMonth() ->gives the current month
console.log(b.getMonth() + 1);//9
// getDay()-> currentDay
console.log(b.getDay());//2
// getDate()
console.log(b.getDate());//26

console.log(`${b.getFullYear()}-${b.getMonth() + 1}-${b.getDate()}`);//2023-9-26

// we can also format the date using the syntax as follows
c = Intl.DateTimeFormat('in-US').format(b)
console.log(c);//26/9/2023

// we can also access specific month
d = Intl.DateTimeFormat('default', { month: 'long' }).format(b)
console.log(d);//September

e = Intl.DateTimeFormat('default', { month: 'short' }).format(b)
console.log(e);//Sep
f = b.toLocaleString('default', { month: 'short' })
console.log(f);//Sep



//  doing all the above things we can do like this instead

h = b.toLocaleString('default',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: "America/New_York"
    })

console.log(h);//Tuesday, September 26, 2023 at 6:55:07 AM