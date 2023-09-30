// the difference between while and for loop is that when we know how many times the loop is going to run we use for loop , and we doesnt the number of loops is going to run then we use while loop

let i = 0
while (i < 0) {
    console.log(i);
    i++
}

console.log('*****');

// do-while executes atleast once  even though if the initial condition is false
let j = 0
do {
    console.log(j);
    j++
}
while (j < 0)

// Loop over array

const array = [10, 20, 30, 40, 50]

let a = 0
while (a < array.length) {
    console.log(array[a]);
    a++
}

// Nesting while loop
let b = 1
while (b <= 10) {
    console.log('Number ' + b);
    let c = 1
    while (c <= 10) {
        console.log(`${b} * ${c} = ${b * c}`);
        c++
    }
    b++
}