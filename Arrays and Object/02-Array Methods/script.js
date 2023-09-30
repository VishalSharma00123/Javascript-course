// push() add an element at the end of the array
const arr = [23, 45, 29, 89, 15];
arr.push(67);
console.log(arr);
// Unshift() add an element at the beginning of the array
const myarr = [45, 29, 89, 15, 67]
myarr.unshift(23);
console.log(myarr);

// shift() removes an element from the beginning of the array
const array = [29, 23, 45, 89, 15, 67];
array.shift();
console.log(array);

// reverse() is used to reverse the array
console.log(array.reverse());

// includes() method is used to check whether the text or value is present or not
console.log(array.includes(23));//true bcz 23 is present in the array
console.log(array.includes(90));//false bcz  90 is not there in the array

// indexOf() is used to check to index of the specified
const myarray = [23, 45, 322, 65, 223, 56]
console.log(myarray.indexOf(223));//4 , 223 is present on the 4th index and there is no specified value present in the array then the answer is -1


