const firstName = "Jonas";
const job = "teacher";
const birthYear = new Date().getFullYear() - 1991;

const jonas = "I'm " + firstName + ', a ' + birthYear + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${birthYear} years old ${job}!`
console.log(jonasNew);

// New Line JavaScript
console.log(
    'String with \n\
    multile \n\
    lines'
);

// New Line JavaScript ES6
console.log(
    `Sring with
    multiple
    lines
`);

