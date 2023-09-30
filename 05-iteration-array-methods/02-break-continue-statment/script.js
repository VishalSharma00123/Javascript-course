
// break Statement:
// The break statement is used to exit a loop prematurely when a certain condition is met. When break is encountered inside a loop, it immediately terminates the loop, and the program continues with the code following the loop.
// Example using for loop:

for (let i = 0; i < 6; i++) {
    if (i === 3)
        break;
    console.log(i);
}
// by using break we can break the loop once it reaches the break condition i.e when i equals to 3 the condtion breaks
// o/p -> 0 1 2

// Continue

// The continue statement is used to skip the current iteration of a loop and move to the next iteration. When continue is encountered, the remaining code within the current iteration is skipped, and the loop proceeds with the next iteration.

// Example using for loop:
// when i equals 4 it skip 4 and move on to the next iteration
for (let i = 0; i < 10; i++) {
    if (i === 4) {
        console.log("skipping 13");
        continue;
    }
    console.log(i);
}