
const calcAge = function(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
} else {
    console.log(`${firstName} has already retired.`);
    return -1;
}
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1946, 'Mike'));