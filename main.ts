// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.

setTimeout(() => {
    console.log("This message is shown after a 2-second delay.");
}, 2000);

console.log("\n");

// Question 149: Explain the concept of the event loop in JavaScript with an example.

console.log("Start");

setTimeout(() => {
    console.log("Callback executed");
}, 0);

console.log("End");

console.log("\n");

// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

console.log("Before synchronous operation");
for (let i = 0; i < 1e9; i++) {}
console.log("After synchronous operation");

console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
