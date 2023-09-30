// for-in loop iterates over the  indexes

const numbers = [10, 20, 30, 40, 50]
for (const index in numbers) {
    console.log(index);
}
// 0/p -> 0 1 2 3 4 

// for-of iterates over index values 
const mynumbers = [10, 20, 30, 40, 50]
for (const number of mynumbers) {
    console.log(number);
}
// 10 20 30 40 50
console.log('**************************');
// accessing objects
const users = [
    {
        id: 1,
        name: 'Vishal Sharma',

    },
    {
        id: 2,
        name: 'Jorden',

    },
    {
        id: 3,
        name: 'Micheal',

    },
]

for (const user of users) {
    console.log(user.id);
    console.log(user.name);
    console.log(user);//{id: 1, name: 'Vishal Sharma'}
}
// o/p ->
// 1
//  Vishal Sharma
//  2
//  Jorden
//  3
//  Micheal
console.log('********************************');
for (const user in users) {
    console.log(users[user].id);
    console.log(users[user].name);
}
// // o/p ->
// 1
//  Vishal Sharma
//  2
//  Jorden
//  3
//  Micheal

// Loop through string

let name = 'Vishal Sharma'

for (let letter of name) {
    console.log(letter);
}
console.log('*******************************');
for (let letter in name) {
    console.log(name[letter]);
}
// o/p ->
// V
//  i
//  s
//  h
//  a
//  l
//
//  S
//  h
//  a
//  r
//  m
//  a


// Loop over Maps
const map = new Map()
map.set('name', 'Vishal')
map.set('age', 30)

// we can key value 
for (const [key, value] of map) {
    console.log(key, value);
}

// name Vishal
//  age 30

// forin loop example

const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green'
};

// To access key
for (const color in colorObj) {
    console.log(color);
}
// O/P -> 
// color1
// color2
// color3
// color4
console.log('*************************');
// To access value
for (const color in colorObj) {
    console.log(colorObj[color]);
}

// red
//  blue
//  orange
//  green

console.log('*************************');

// To access key value pair

for (const color in colorObj) {
    console.log(color, colorObj[color]);
}

// color1 red
//  color2 blue
//  color3 orange
//  color4 green