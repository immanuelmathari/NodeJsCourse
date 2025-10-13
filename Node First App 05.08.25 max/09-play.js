// reviewed 21.08.25

// 08.08.25

const person = {
    name : 'manu',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

// but as you can see we only want the name. say this is coming from a third party library that we have no access over. 
// we destructure ({ })
// we can just specify the name of the property we want 
const printName2 = ({ name, greet }) => {
    console.log(name);
} 
printName2(person);
// basically you pull the properties we actually need from a datapool


// OR
// you store in the const the names you expect to be equal to that object.
const { name, age } = person; // will store the value of the object property of name and age in object person. this convention is not common but when it comes to destructuring it is.
console.log(name,age);

// to destructure arrays
const hobbies = ['Boxing', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
console.log("Hi this is my first hobby " +hobby1 + " and this is my second hobby " + hobby2);
// NB: when you destructure objects you use {} when destructuring arrays you use []. and once destructured, they wount be arrays
