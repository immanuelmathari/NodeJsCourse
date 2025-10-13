// reviewed 21.08.25

const hobbies = ['Boxing', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

// map will take a function that defines how to edit an array
// that function will be executed in each element of the array one after another
// and it returns the updated version of the element

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));

// or

console.log(hobbies.map(hobby => 'My Hobby is : ' + hobby));