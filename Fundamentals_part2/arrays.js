const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);
// const friends = ['Bob', 'Alice'];

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2023 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
currentYear = new Date().getFullYear()
function calcAge(birthYear) {
    return currentYear - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);