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

parent.children()




