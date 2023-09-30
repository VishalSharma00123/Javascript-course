// we can set the default parameter un-case if user doesnt paas argument for the given parameter
// here if user doent paass any value then the user will Bot as the default value
function registeredUser(user = 'Bot') {

    return user + ' is registered'
}
console.log(registeredUser());//Bot is registered
console.log(registeredUser('Vishal'));// Vishal is registered

// Rest parameter -> by using rest params we access all the array value
// forof loop value access the valueof array
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num
    }
    return total
}
console.log(sum(23, 35, 67, 95));//[23, 35, 67, 95]

//forin loop access the index of the array
function sum(...numbers) {
    let total = 0;
    for (const num in numbers) {
        total += numbers[num]
    }
    return total
}
console.log(sum(23, 35, 67, 95));//[23, 35, 67, 95]

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`
}
user = { id: 1, name: 'Vishal Sharma' }
console.log(loginUser({ id: 1, name: 'Vishal Sharma' }));
// The user Vishal Sharma with the id of 1 is logged in
console.log(loginUser(user));
// The user Vishal Sharma with the id of 1 is logged in

// Arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex]
    return item
}
console.log((getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)));