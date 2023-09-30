// we are converting string in to json using JSON.stringify() method
// json data always consist of double quote for except number
const post = {
    id: 1,
    title: 'post one',
    body: 'This is the body'
}
const str = JSON.stringify(post)
console.log(str);
// {"id":1,"title":"post one","body":"This is the body"}

// here we can a json data in the console

// JSON.parse() is used to convert json data into js object

const obj = JSON.parse(str)
console.log(obj);
//{id: 1, title: 'post one', body: 'This is the body'}

// eg 2 converting object in to json data using JSON.stringify()

const array = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body'
    },
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body'
    },
]

const store = JSON.stringify(array)
console.log(store);

// [{"id":1,"title":"Post One","body":"This is the body"},{"id":1,"title":"Post One","body":"This is the body"}]

// convert json data into object again using JSON.parse()
// store is a json data convert it into js object
const store2 = JSON.parse(store)
console.log(store2);
//  [{…}, {…}]0: {id: 1, title: 'Post One', body: 'This is the body'}1: {id: 1, title: 'Post One', body: 'This is the body'}length: 2[[Prototype]]: Array(0)
// Note we cannot access the propety or key value of the json data like this store.id in order to access first we need to convert it into js object then we can access it