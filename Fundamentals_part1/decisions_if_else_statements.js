const age  = 15;

if(age >= 18) {
    console.log("You can  get a driving licence 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young. Wait another ${yearsLeft} years to get a driving licence 🚗`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);