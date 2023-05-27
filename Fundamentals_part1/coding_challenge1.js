/* 
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is  formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in metter).

1. Store Mark's and John's mass and height in  variables.
2. calculate both  both their BMI's using the fomula (you can even implement both versions).
3. Create a boolean variable `markHeightBMI` containing information about whether mark has higher BMI than John.


TEST DATA 1: Mark weight 78kg and is 1.69m tall.
John weight 92kg and is 1.95m tall
TEST DATA 2: Marks weight 95kg and is 1.88m tall.
John weights 85kg and 1.76m tall.

GOOD LUCK 🙂
*/

// TEST DATA 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// TEST DATA 2
const massMark = 95;
const heightMark = 1.95;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn); 
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
