'use strict';

// Forloop and array

let numbers=[1,2,3,4,5];

// for(let i=0; i<10;i++){
//     console.log(numbers[i]);
// }


let newArray=[];
// numbers.forEach();

numbers.forEach(number =>{
    newArray.push(number*2);
    // console.log(number*2);
});
console.log(newArray);
console.log(numbers);