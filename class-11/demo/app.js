"use strict";
// Array Methods: map(), filter(), forEach(), reduce(), find()

// Methods chaining

// let arr=[1,2,3,6,9,8];
// let newArr=arr.map(item=>item*2)
// .filter(item=>item>=10)
// .reduce((accumulator,item)=>accumulator+item);
// console.log(newArr);
// let newArr=arr.filter(item=>item<=10)
// .reduce((accumulator,item)=>accumulator+item)
// .map(item=>item*2);
// console.log(newArr);
/* 
Destructuring assignment
*/
// let name, age, rest;
let person={
    name:"John Doe",
    age:26,
    idNumber:123456
}
const { name, ...rest } = person;
console.log(name); // 10
console.log(rest); // 20
console.log(person);

// ({a,b}={
//     name:"John Doe",
//     age:26,
//     idNumber:123456
// });
// console.log(a);
// console.log(b);
// console.log(person);
// console.log("=========before destructring======");
// console.log(a);
// console.log(b);
// // [a, b] = [10, 20];
// let arr=[10, 20, 30, 40, 50];
// console.log(arr);
// [a, b, rest] = arr;
// console.log("=========after destructring======");
// console.log(a);
// console.log(b);
// console.log(rest);
// console.log(arr);

