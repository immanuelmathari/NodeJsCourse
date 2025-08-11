// 11.08.25
// ati this is wrong
const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
};

const personTwo = {
    name: 'Max',
    age: 29,
    greet: function() {
        console.log('Hi, I am ' + this.name);
    }
};

// preferred
const personThree = {
    name: 'Immanuel',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);

// to use the greet, you see you cant call it the way it is above
person.greet(); 
// why is this like that? because ToDo research arrow functions the this keyword refers to the global scope

personTwo.greet();

// or,

personThree.greet();