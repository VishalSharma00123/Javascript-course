// window is the parent scope for all the scope
window.alert('Hello')
// we dont have to use window
alert('Hello')
// innerWidth gives the width of the browser
console.log(window.innerWidth);//1000

// innerHeight gives the height of the browser

// global scope

const x = 100;

console.log(x, 'is global');

function run() {
    console.log(window.innerHeight);
    console.log(x, 'in function ');
}
run()//627

// local scope and Variable shadowing
// variable shadowing means overriding the older value with the newer value
function add() {
    // here we can see previously the x value was 100 but now it is 2 it is called variable shadowing
    const x = 2
    const y = 50
    console.log(y + x);
}
add();
// console.log(y);//cannot access the y because it is defined locally and we know we cannot accesse the local variable from global scope but we can access the global access the global variable from the local scope