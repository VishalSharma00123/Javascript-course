// block scope-> scope which are accessable only inside the blocl such as if block for block while switch and so on
// if we try to access the block scopic variable from the outside it will  show that it is not  defined
const y = 10

if (1) {
    let x = 16
    // we can access y bcz it is a global variable
    console.log(x + y);
}
// console.log(x);//x is not defined

// eg 2
// const and let are block scopic variable so we cannot access then outside the block whereas var is function scopic vatiable we can access them outside the block also
if (true) {
    const a = 2
    let b = 3
    var c = 6
}

// console.log(a); a is not defined
// console.log(b); b is not defined
console.log(c);//6