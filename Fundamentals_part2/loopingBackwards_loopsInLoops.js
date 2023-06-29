const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1. ...., 4
// 4, 3 ...., 0

// Looping backwards
for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}
// Loop in a loop (nested loops)
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for(rep = 1; rep < 6; rep++) {
        console.log(`${exercise}: Lifting weight repetition ${rep} 🏋️`);
    }
}