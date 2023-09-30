// filter() method in js will give whole new array
// here it check if the number is greater than 50 or not if it is greater then it will include that number in to the new array


// method 1 of using filter method
const array = [10, 20, 30, 40, 50, 60, 70]

const compare = number => {
    if (number > 50) {
        console.log(number);
    }
}
array.filter(compare)//60 70

console.log('**********************8');

// method 2 of using filter method

array.filter(number => {
    if (number > 50) {
        console.log(number);
    }
})

// eg 2
const words = ['football', 'cricket', 'golf', 'badminton', 'kabaddi', 'Chess']
words.filter(word => {
    if (word.length > 5) {
        console.log(word);
    }
})
// o/p ->
// football cricket badminton kabaddi

// filter out all the odd number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = even => {
    if (even % 2 === 0) {
        return `${even} is even`;
    }
    else {
        console.log(`${even} is odd`);
    }
}

numbers.filter(evenNumbers)

//  o/p ->
//  1 is odd
//  2 is even
//  3 is odd
//  4 is even
//  5 is odd
//  6 is even
//  7 is odd
//  8 is even
//  9 is odd
//  10 is even

// returning an whole new array

const myevenNumbers = numbers.filter(number => number % 2 === 0)
console.log(myevenNumbers);
// o/p -> [2, 4, 6, 8, 10]

// find evenumber using forEach() method instead of filter() method
let even = []
numbers.forEach(number => {
    if (number % 2 === 0) {
        even.push(number)
    }
})
console.log(even);

// o/p -> [2, 4, 6, 8, 10]

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// company whose category is Retail
const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies);

// companies after 1980  and after 2009

const companyDuration = companies.filter(company => company.start >= 1980 && company.end <= 2005)

console.log(companyDuration);

// company that lasted 10 year or more

const checking = companies.filter(company => (company.end - company.start) >= 10)
console.log(checking);

const companyNames = companies.map(company => company.name)
console.log(companyNames);
// ['Company One', 'Company Two', 'Company Three', 'Company Four', 'Company Five', 'Company Six', 'Company Seven', 'Company Eight', 'Company Nine']

// Create an array with just company and category

const companyInfo = companies.map(company => {
    return {
        name: company.name,
        category: company.category,
    }
})

// Create an array of objects with name and the length of each company in Years

const companyYears = companies.map(company => {
    return {
        name: company.name,
        length: company.end - company.start
    }
})

console.log(companyYears);