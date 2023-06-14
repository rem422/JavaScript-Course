// Arrow function
const calcAge3 = birthYear => new Date().getFullYear() - birthYear;

const age3 = calcAge3(2000);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = new Date().getFullYear() - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2000, 'Remmy'));
console.log(yearsUntilRetirement(1996, 'Gideon'));