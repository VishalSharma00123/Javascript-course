const library = [{
    title: 'Think Like a Monk',
    auther: 'jay shetty',
    status: {
        own: true,
        reading: false,
        read: false
    },
}, {
    title: 'Rich Dad Poor Dad',
    auther: 'Robert Kiyoski',
    status: {
        own: true,
        reading: false,
        read: false
    },
}, {
    title: 'How to Influence and Win People',
    auther: 'Dale Carnegie',
    status: {
        own: true,
        reading: false,
        read: false
    },
},
]

library[0].status.reading = true
library[1].status.reading = true
library[2].status.reading = true

const { title } = library[0]

console.log(title);//Think Like a Monk

console.log(library);

const store = JSON.stringify(library)

console.log(store);

// [{"title":"Think Like a Monk","auther":"jay shetty","status":{"own":true,"reading":true,"read":false}},{"title":"Rich Dad Poor Dad","auther":"Robert Kiyoski","status":{"own":true,"reading":true,"read":false}},{"title":"How to Influence and Win People","auther":"Dale Carnegie","status":{"own":true,"reading":true,"read":false}}]