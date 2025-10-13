// reviewed 21.08.25

const hobbies = ['Boxing', 'Cooking'];

const copiedArray = hobbies.slice();

// option two
const copiedArray2 = [hobbies]; // it becomes an array with another array. its a new element where the first array is the old array
const copiedArray3 = [...hobbies]; // this pulls out all elements of an array and puts it around whatever is around that spread operator. so it will pull each element out and put it in the new [] array. this is a spread operator

// 08.08.25
// This will work for both arrays and objects
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = {...person}; // you can also spread an object. you pull elements out of the object and put it in that spread operator
console.log(copiedPerson);

console.log(copiedArray);
console.log(copiedArray2);
console.log(copiedArray3);

const toArray = (arg1, arg2, arg3) => {
    return [arg1,arg2,arg3];
};

console.log(toArray(1,2,3));

// what if we want to add 4 variables,
// we use the rest operator

// this below will bundle all arguments in an array
const toArray2 = (...args) => {
    return args;
};
console.log(toArray2(1,2,3,4,5,6));

// NB: the rest operator looks just like spread operator. its where you use it that determines what you call it. are you using it to pull elements or properties from arrays or objects thats a spread. are you using it to merge arguments in the parameter of a function its a rest operator.