const name = 'Immah';
let age = 24;
const hasHobbies = true;

age = 25;

const summerizeUser = (userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

// if its one statement we are returning like this,
const add = (a,b) => {
    return a + b;
}

console.log(add(1,2));

const addAnother = (a,b) => a + b;

// when you only have one argument
const addOne = a => a + 1;

// without arguments 
const addRandom = () => 43 + 1;

console.log(addRandom());

console.log(addAnother(3,4));

console.log(summerizeUser(name, age, hasHobbies));