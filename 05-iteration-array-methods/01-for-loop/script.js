// for loop
// syntax
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
// Note we should not use const in for loop bcz the i value keep on changing and we know the variable declared with let keyword cannot be re-declared again
for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is my lucky number');
    }
    else {
        console.log('Number' + i);
    }
}
// console.log(i);//cannot access i outside the for loop bcz let is block scopic

for (let i = 1; i <= 10; i++) {
    console.log('Number' + i);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Loop through an array

const names = ['Vishal', 'joseph', 'messi', 'smith', 'anserson']
for (let i = 0; i <= names.length - 1; i++) {
    if (names[i] === 'messi') {
        console.log('messi is the best');
    }
    else {
        console.log(names[i]);
    }
}