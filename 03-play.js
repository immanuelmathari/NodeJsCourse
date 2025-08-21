// reviewed 21.08.25

const name = 'Immah';
let age = 23;
const hasHobbies = true;

age = 24;

// anonymous function stored in a constant variable 
const summerizeUser = function (userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

// we now can call this constant that holds the value which is the function 

console.log(summerizeUser(name, age, hasHobbies))