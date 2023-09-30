// check if a person is eligible to vote or not using  if else
const myage = 15

if (myage >= 18) {
    console.log('You can vote');
}
else {
    console.log('Your not eligible');
}

// check if a person is eligible to vote or not using  ternary(?)
const age = 19

age >= 18 ? console.log('You can vote') : console.log('Your not eligible');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? 'Yes' : 'No'
console.log(canVote);

// Multiple statments

const auth = true
// let redirect;
// if (auth) {
//     alert('Welcome to the dashboard')
//     redirect = '/dashboard'
// }
// else {
//     alert('Access Denied')
//     redirect = '/login'
// }
// console.log(redirect);

// if we want to display two outputs or multple statement then place the Multiple statements inside the () and statments are separated by ,
auth ? (alert('Welcome to the dashboard'), console.log('/dashboard')) : (alert('Access Denied') ?? console.log('/login'))

// if we dont want to display anything in else part then use null
auth ? console.log('Welcome to the dashboard') : null;
auth && console.log('Welcome to the dashba');