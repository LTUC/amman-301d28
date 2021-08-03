'use strict';

const numbers=[1,2,3,4,5,6,7,8];
// we need to get the even numbers only out of the original array

// const evenArray=[]
// numbers.forEach(number=>{
//     if(number%2===0){
//         evenArray.push(number);
//     }
// });

// const evenArray=numbers.map(number=>{
    
//         return number*2;
    
// });
// console.log("even array",evenArray);
// console.log("numbers",numbers);
// const oddArray=myArray.filter(number=>{
//     return number % 2 !== 0;
// });
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
console.log(words);
/*
- foreach it is an array method to loop through the array:
    - it has no return value
    - it does not modify the original array
    
- map it is an array method to loop through the array:
    - it has a return value(new array with the same legnth of the original array)
    - it does not modify the original array

- filter it is an array method to loop through the array:
    - it has returns a new array(elements must pass a condition or a critira in order to be returned in the new array)
    - it does not modify the original array        
*/

