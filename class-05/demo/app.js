'use strict';
/*
Reduce method
*/
// let numbers=[1,3,99,6];
// sum => accumulator
// let sum=0;
// for(let i=0; i<numbers.length;i++){
//     sum+=numbers[i];
// }
// const reduceFunction=(accumulator,value,idx)=> {
//     /*
//     - a=1,v=3
//     - a=4,v=99
//     - a=103,v=6
//     - a=109,
//     */
//     accumulator = accumulator + value;
//     console.log('value: ',value);
//     console.log('acc: ',accumulator);
//     console.log('===============');
//     return accumulator;
//   }
// let sum = numbers.reduce(reduceFunction,0);

// console.log(sum);

/* 
Sort method
it compares based on the utf-16 encoding
*/
const compareNumbers=(a, b)=> {
    console.log('a:',a);
    console.log('b:',b);
    return a - b;
  }
  
let array = [1,6,4,2,8,11,4,99,0];
console.log("unsorted: ",array);
array.sort(compareNumbers);
console.log("=================")
console.log("sorted",array);

  // Or all in line:
//   array.sort( (a,b) => { 
//     return a-b; 
//   });
  
















