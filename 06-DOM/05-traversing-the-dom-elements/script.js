const parent = document.querySelector('.parent')

console.log(parent);

// accessing children
console.log(parent.children);
// HTMLCollection(3) [div.child, div.child, div.child]

// accessing first child
console.log(parent.children[1]);
// <div class="child">Child 2</div>

// accessing text
console.log(parent.children[1].innerText);
//Child 2

// name of the node
console.log(parent.children[1].nodeName);
// DIV

parent.children[0].innerText = "first child"

parent.children[1].style.color = "blue"
parent.children[1].style.fontWeight = "600"

// firstElementChild and lastElementChild is used to acess the first and last children
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);


// get parent element from a child

const child = document.querySelector('.child');
output = child.parentElement;
console.log(output);

// applying border around parent div

child.parentElement.style.cssText = "color:red;border:2px solid;padding:12px;width:30%"

// Sibling Element using nth-child()

const secondItem = document.querySelector('.child:nth-child(2)')//accessig 2nd child
console.log(secondItem);
{/* <div class="child" style="color: blue; font-weight: 600;">Child 2</div> */ }


// nextElementSibling() method to access next sibling

output = secondItem.nextElementSibling
console.log(output);
{/* <div class="child">Child 3</div> */ }

secondItem.nextElementSibling.style.cssText = "color:green;border:2px solid black"

// previousElementSibling()


console.log(secondItem.previousElementSibling);
{/* <div class="child" style="color: green; border: 2px solid black;">first child</div> */ }


secondItem.previousElementSibling.style.cssText = "color:green;border:2px solid black"









