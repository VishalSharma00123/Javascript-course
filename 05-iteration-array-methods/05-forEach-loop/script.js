const arr = [10, 20, 30, 40, 50]

// __proto__ shows all the available methods in javascript,we can see all the methods in the browser console 
console.log(arr.__proto__);


arr.forEach(n => console.log(n + 1))
// o/p -> 11 22 33 44 55

// forEach(item,index,array)

arr.forEach((item, index, arr) => {
    console.log(`for item ${item} index is ${index} and our final array is ${arr}`);
})

// for item 10 index is 0 and our final array is 10,20,30,40,50
//  for item 20 index is 1 and our final array is 10,20,30,40,50
//  for item 30 index is 2 and our final array is 10,20,30,40,50
//  for item 40 index is 3 and our final array is 10,20,30,40,50
//  for item 50 index is 4 and our final array is 10,20,30,40,50

// forEach() on objects

const socialObject = [
    { name: 'Twitter' },
    { name: 'google' },
    { name: 'facebook' },
    { name: 'Instagram' },
]

socialObject.forEach(item => {
    console.log(item);
    console.log(item.name);
})