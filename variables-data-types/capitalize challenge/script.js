// making first letter as upper case using charAt()

let mystring = 'developer'
mystring = `${mystring.charAt(0).toUpperCase()}${mystring.substring(1)}`
console.log(mystring);

// making first letter as upper case using substring()

let string = 'developer'
string = string.substring(0, 1).toUpperCase() + string.substring(1)
console.log(string);

// making first letter as upper case using slice()

let store = 'developer'
store = store.slice(-9, -8).toUpperCase() + store.substring(1)
console.log(store);

// 4th solution
let mystore = 'developer'
mystore = mystore[0].toUpperCase() + mystore.slice(1);
console.log(mystore);