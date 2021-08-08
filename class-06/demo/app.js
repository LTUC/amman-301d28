'use strict';

let age=37;
let newAge=age;
age=23;

console.log("age: ",age);
console.log("newAge: ",newAge);
let person={
    name:"Yahya"
}

// let newPerson=person;
// newPerson.name="John";
// console.log("person: ",person);
// console.log("new person: ",newPerson);
let newPerson={...person};
newPerson.name="John";
console.log("person: ",person);
console.log("new person: ",newPerson);
// Data types(primitive ):
/*
Numbers: 3/3.6/-+
Strings: any seq of chars
Booleans: true/false

Special Data types:
Arrays:[item1, item2,....]
Objects:{
    "key":"val"
}
functions are Objects in JS

*/