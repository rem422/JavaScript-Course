const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    birthYear : 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven'],
    hasDriversLincense : true,

    // calcAge : function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge : function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge : function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary : function() {
        return `${this.firstName} is a ${this.calcAge()} years old ${jonas.job}, and he has ${this.hasDriversLincense ? "a" : "no"} driver's lincense.`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// Challenge
// "Jonas is a 46 year old teacher. and he has a /no drivers license"
console.log(jonas.getSummary());