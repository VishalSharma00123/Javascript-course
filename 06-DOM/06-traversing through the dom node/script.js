let output

const parent = document.querySelector('.parent')

// accessing the child nodes using childNode
output = parent.childNodes;
console.log(output);//NodeList(10)

// accessing first child node
output = parent.childNodes[0];
console.log(output);
// #text

output = parent.childNodes[1];
console.log(output);//<!-- Children -->

output = parent.childNodes[2];
console.log(output);//<!--  -->

output = parent.childNodes[4];
console.log(output);//<div class="child">Child 1</div>

// changing the innerText of 2nd Node
parent.childNodes[4].innerText = "1st child"
console.log(parent.childNodes[6]);
parent.childNodes[6].style.cssText = "color:red"

console.log(parent.firstChild);
console.log(parent.lastChild);

parent.lastChild.textContent = "Hello"
parent.firstChild.textContent = "Hey"

const childnode = document.querySelector('.child')

console.log(childnode.parentNode)

parent.style.backgroundColor = '#ccc'

// acessing 2nd child

const secondItem = document.querySelector('.child:nth-child(1)');
console.log(secondItem);

output = secondItem.nextSibling
console.log(output);//#text


output = secondItem.previousSibling
console.log(output);//#text