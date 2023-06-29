const friends = ['Michael', 'Steven', 'Peter'];

// Push Method - adds elements to the end of an array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// Unshift Method - adds elements to the beginning of an array
friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // removes last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift() // removes first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23)
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}