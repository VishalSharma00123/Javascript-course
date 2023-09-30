// An Immediately Invoked Function Expression (IIFE) in JavaScript is a self-contained function that is defined and executed immediately after its creation. It's a common pattern used to create a private scope for variables and functions, preventing them from polluting the global scope and avoiding naming conflicts with other JavaScript code.

// You enclose a function within parentheses (function () { ... }). This creates an anonymous function.

// Following the closing parenthesis of the function, you add another pair of parentheses () to immediately invoke or execute the function.

// syntax

/* (function () {
   Code enclosed within the IIFE
 })();
 */
// Note : it is very important to ; after every function
// to paas any argument paas it inside the (),in this example we passed Vishal inside the () for the name parameter
(function (name) {
    console.log(`My name is ${name}`);
})('Vishal');

(() => {
    let name = 'Roman Reigns'
    console.log(name);
    const myfunc = () => {
        console.log("Hello");
    }
    myfunc()
})();
//this () is used for displaying the function

// passing an argument in to the function
