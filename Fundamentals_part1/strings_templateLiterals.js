const firstName = "Jonas";
const job = "teacher";
const birthYear = new Date().getFullYear() - 1991;

const jonas = "I'm " + firstName + ', a ' + birthYear + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${birthYear} years old ${job}!`
console.log(jonasNew);