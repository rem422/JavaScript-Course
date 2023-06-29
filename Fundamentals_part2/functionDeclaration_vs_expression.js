// function declaration
function calcAge1(birthYear) {
    return new Date().getFullYear() - birthYear;
}

const age1 = calcAge1(1966);
console.log(age1);

// function expression
const calcAge2 = function(birthYear) {
    return new Date().getFullYear() - birthYear;
}

const age2 = calcAge2(2000);
console.log(age2);
