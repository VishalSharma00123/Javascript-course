// function Declaration
// we can use the declarative function before initialization this is called hoisting but it only works for declarative function
console.log(addDollarSign(100));//$100

function addDollarSign(value) {
    return '$' + value;
}


// function Expression
// initially we can assign the function to a varible and later we will use that variable for calling function
const addPlusSign = function (value) {
    return '+' + value
};
console.log(addPlusSign(100));//+100