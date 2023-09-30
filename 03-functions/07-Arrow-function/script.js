// Arrow function
const add = (a, b) => {
    return a + b
}
console.log(add(4, 5));//9

// if we have only one statement to return then we dont need {} and return keyword

const subtract = (a, b) => a - b

console.log(subtract(4, 3));//1

// if we have only can paramter then no need of using ()
const double = a => a * 2

console.log(double(10));//20

// use () to return an object

const CreateObj = () =>
(
    {
        name: 'Vishal Sharma'
    }
)
console.log(CreateObj());//{name: 'Vishal Sharma'}

// forEach loop

const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function (n) {
    console.log(n);
})
