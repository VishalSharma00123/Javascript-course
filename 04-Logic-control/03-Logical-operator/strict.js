// ( && ) and operator
// returns true if all the conditions are true
console.log(10 < 78 && 90 > 89 && 89 === 89);//true
console.log(10 > 78 && 90 > 89 && 89 === 89);//false

// ( || ) or operator
// returns true if any one conditions is true
console.log(10 < 78 || 90 < 89 || 89 !== 89);//true
console.log(10 > 78 || 90 < 89 || 89 !== 89);//false

// it return first falsy value and if none of them are falsy then it returns the last value
// we already know what is falsy and what truthy value
/* some of the falsy values ar 
0,
null,
undefined,
'' and except this everything is truthy value
*/
let a;
a = 10 && 20;
console.log(a);//20 -> it returns last value
a = 10 && 20 && 30;
console.log(a);//30 -> it returns last value
a = 10 && '' && 30;
console.log(a);//empty or nothing -> it returns empty bcz it is a falsy  value
a = 0 && 20 && 30;
console.log(a);//0 -> it returns 0  bcz it is a falsy value

const posts = []
posts.length > 0 && console.log(posts[0]);

// || works opposite to && it returns first truthy value or it returns last value

b = 10 || 20
console.log(b);//10
b = 0 || 20
console.log(b);//20
b = 0 || null || undefined || ''
console.log(b);

// ?? -> Returns the right side operand when the left is null or undefined

let c;
// here it returns 10 which is on the left side bcz right is neither null nor undefined
c = 10 ?? 20
console.log(c);//10
d = null ?? 20
console.log(d);//20
e = undefined ?? 20
console.log(e);//20

