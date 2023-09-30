const person = {
    name: 'Vishal Sharma',
    age: 21,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: "Bangaluru",
        state: 'Karnataka'
    },
    hobbies: ['cricket', 'reading', 'exercie', 'coding']
}
// object consist of key value pair
// we can access the values using dot operator
console.log(person.age);//21
console.log(person.name);//Vishal Sharma
console.log(person.isAdmin);//true

// we can access the nested object like this
console.log(person.address.state);//karnataka
console.log(person.address.street);//123 Main st

// We can also array values using there indexes
console.log(person.hobbies);// ['cricket', 'reading', 'exercie', 'coding']
console.log(person.hobbies[2]);//exercie
console.log(person.hobbies[1]);//reading
console.log(person.hobbies[0]);//Vishal Sharma

// we can also use square bracket to access values but the key should inside  string
console.log(person['name']);//Vishal Sharma
console.log(person['age']);//21
console.log(person['isAdmin']);//true

console.log(person['address']['street']);//123 Main st
console.log(person.address['state']);//Karnataka
console.log(person['address']['city']);//bangaluru

console.log(person['hobbies'][0]);//cricket
console.log(person['hobbies'][2]);//exrcise
console.log(person['hobbies'][1]);//reading

// we can also update the value of object

person.name = "Virat Kohli"
person['age'] = 34
console.log(person);
// {name: 'Virat Kohli', age: 34, isAdmin: true, address: {…}, hobbies: Array(4)}

// we can also delete a key:value pair in object using delete keyword

delete person.address
console.log(person);

// we an add function to object
person.greet = () => {
    console.log(`hi, My name is ${this.name}`);
}

person.greet();//hi, My name is 

// specify key inside the key when there is a space used inbetween the name
// to access this type of key's we need to use square bracket

const person1 = {
    'first name': 'Vishal Sharma',
    'My age': 21
}
console.log(person1['first name']);