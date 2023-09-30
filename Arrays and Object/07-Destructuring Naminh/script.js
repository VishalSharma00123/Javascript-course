// if our key and value are same then we dont have to include the 2nd value
const firstname = 'Vishal';
const lastname = 'Sharma';
const age = 21;

const person =
{
    firstname: firstname,
    lastname: lastname,
    age: age
}

console.log(person);

// the above can be written like this as well

const person1 = {
    firstname,
    lastname,
    age
}

console.log(person1);

// we can destructure the key from the object
// suppose we have a nested object we destructure that also -> user: { place, state }
// we can also rename properties or key's-> id: myId
const todo = {
    id: 1,
    title: 'Take Out Trash',
    user: {
        place: 'Bangalore',
        state: "Karnataka"
    }
}

const { id: myId, title, user: { place, state } } = todo//destructring id from todo and destructring title from todo
console.log(myId);//1
console.log(title);//Take Out Trash
console.log(place);//Bangalore
console.log(state);//Karnataka
console.log(todo);

// Destructuring arrays
// rest operator is used to copy  rest of the values
const arr = [23, 45, 28, 76, 43, 67]
const [first, second, ...rest] = arr
// here first parameter holds 1st value and 2nd parameter holds 2nd value the name doesnt have to be first,second,third... so on we can choose any name but parameter doesnt differs
console.log(first, second, rest);//23 45

