// adding properties to the object

let x;

// creating object constructor

const todo = new Object()

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

console.log(todo);//{id: 1}

const person = {
    address: {
        coords: {
            lat: 42.727637,
            lng: -78.8237
        }
    }
}

// access lat
x = person.address.coords.lat
// [or]
x = person['address']['coords']['lat']

console.log(x);//42.727637

// we can add two or more object,but here both the objects are in different indexes
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 }
console.log(obj3);//{obj1: {…}, obj2: {…}}

// if we want to create a single obj by combining two or more object then use spred oprtr

const obj4 = { ...obj1, ...obj2 }
console.log(obj4);//{a: 1, b: 2, c: 3, d: 4}

// accesing array of objects

const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pickup kids from school' },
    { id: 3, name: 'Take out trash' }
]

console.log(todos);

a = todos[0]//accesing 1st object of the  array
console.log(a);//{id: 1, name: 'Buy Milk'}
c = todos[1]//accesing 2nd object of the  array
console.log(c);//{id: 2, name: 'Pickup kids from school'}

d = todos[0].name
console.log(d);//Buy Milk
d = todos[1].name
console.log(d);//Pickup kids from school

// we can also access the keys using keys() methos

const store = Object.keys(todos)
console.log(store);// ['0', '1', '2']

// and similarly we can access the values
// Note we cannot access the values of multiple object
const obj = {
    id: 1,
    name: 'Vishal Sharma'
}
const store1 = Object.values(obj)
console.log(store1);//  [1, 'Vishal Sharma']

// entries() method

const store2 = Object.entries(obj)
console.log(store2);

// [Array(2), Array(2)]
// 0: (2) ['id', 1]
// 1: (2) ['name', 'Vishal Sharma']
// length: 2[[Prototype]]: Array(0)

// has