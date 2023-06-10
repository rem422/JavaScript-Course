// LET - can be mutated
// Let is blocked scoped

let age = 30;
age = 31;
console.log(age);

// COST - Can not be mutated

const birthYear = 1991;
// birthYear = 1992;
// console.log(birthYear);

// Can not declare empty const variables
// const job;
// console.log(job);

// VAR -should be completely avoided
// Var is function scoped

var job = 'Programmer';
job = "Teacher";
console.log(job);