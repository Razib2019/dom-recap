// try-catch-finally
const day = 'din the day';
console.log(day);
console.log(25);
/* console.log(district);
let district = 'B.Baria'; */
console.log(100);
console.log(100);
console.log(100);

try {
    console.log('inside try');
    // console.log(student);
    console.log(district);
    let district = 'B.Baria';
    console.log('after error');
}
catch (error) {
    console.log('inside catch');
    console.log('error');
}
finally {
    console.log('finally done');
}
console.log('last line of the code');