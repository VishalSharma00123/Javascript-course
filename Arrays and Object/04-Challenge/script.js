const arr = [1, 2, 3, 4, 5]
arr.unshift(0)

arr.push(6)

arr.reverse(arr)

console.log(arr);//[6, 5, 4, 3, 2, 1, 0]

// 1st solution using spread operator
let arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]

arr1 = arr1.slice(0, 4)//[1, 2, 3, 4]
console.log(arr1);

const store = [...arr1, ...arr2]

console.log(store);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2nd solution( using concat)
const mystore = arr1.slice(0, 4).concat(arr2)
console.log(mystore);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]