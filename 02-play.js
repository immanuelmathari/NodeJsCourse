const name = 'Max'; // string
var age = 29; // number
const hasHobbies = true; // boolean

age = 30

function summerizeUser(userName, userAge, userHasHobby){
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

console.log(name);
console.log(summerizeUser(name, age, hasHobbies)); // you call a function by passing parenthesis after its name and the arguments init