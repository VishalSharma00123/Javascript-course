function sayHello() {
    console.log('Hello world');
}

sayHello();

// parameters are nothing but variable
// num1 and num2 are the parameters
function add(num1, num2) {
    return num1 + num2
}
// 5 and 6 are the argument,arguments are just like value fir the variable
console.log('result', add(5, 6));

function sub(num1, num2) {
    console.log(num1 - num2);
}
sub(5, 3)