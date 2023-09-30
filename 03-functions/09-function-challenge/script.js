//Challenge 1 -> Convert fahreheit to celsius

// Solution 1
const getCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9
    console.log(`The temperature is ${celsius} \xB0C`);
    // The temperature is 0 °C
}
getCelsius(32)

// Solution 2
const Celsius = f => (f - 32) * 5 / 9

console.log(`The temperature is ${Celsius(32)} \xB0C`);
// The temperature is 0 °C

// Challenge 2->

const minMax = (array) => {
    const Min = Math.min(...array)
    const Max = Math.max(...array)
    return {
        Min,
        Max
    }
}
console.log((minMax([1, 2, 3, 4, 5])));
// 0/p -> {Min: 1, Max: 5}

// Challenge 3

((width, length) =>
    console.log(`The area of  rectangle  with a lengtho of`))(5, 2);