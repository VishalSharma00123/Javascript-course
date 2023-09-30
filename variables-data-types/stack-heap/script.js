// Primitive values are stores in stack

const name = 'vishal'
const age = 21

// References values are stored in heap

const person =
{
    name: 'vishal',
    age: 21
}

let newname = name
newname = 'Rahul'

console.log(name, newname);