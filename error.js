// not in JS that frequently: RangeError
/* const numbers = [3, 4, 5, 8];
console.log(numbers[25]); */


// You should not do it (most of the time)
/* numbers.length = 2;
console.log(numbers);
console.log(numbers.length); */


// ReferenceError
/* console.log(money);
const money = 80; */



// SyntaxError Or Code SyntaxError
1. /* for(let i=0;i,5 i++){
} */

2. /* if(numbers.length /> 2){
} */

3. /* if(numbers.length > 2){
}
else
*/



// TypeError
1. /* const num = 123;
num.toUpperCase(); */

// TypeError: Cannot read properties of undefined
2. /* let student = {};
console.log(student.address.city); */


// Error() constructor