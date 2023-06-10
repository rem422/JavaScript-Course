/* 
Coding Challenge #2

Use the BMI example from challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the highest BMI. The message can be either "Mark's BMI is higher than John's" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values is the outputs. Example: "Mark's BMI (28.3) is higher than John's BMI (23.9)!".

HINT: Use an if/else statement 

GOOD LUCK 🙂
*/

// TEST DATA 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// TEST DATA 2
// const massMark = 95;
// const heightMark = 1.95;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn); 

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn} )is higher than Mark's BMI (${BMIMark} )`);
}

// console.log(BMIMark, BMIJohn);