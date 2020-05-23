// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/javascript
//6 kyu

/* Description */
/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

*/

/* Function */
const createPhoneNumber = (array) => {
    // insert the () and - into the array
    array.splice(0,0,'(')
    array.splice(4,0,') ')
    array.splice(8,0,'-');
    // and then reduce it to a single string
    return array.reduce( (combo, item) => {
        return combo + item.toString()
     });
}

/* Export */
module.exports = createPhoneNumber;

/* Test Cases */
// console.log( createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 's/b', '(123) 456-7890');
// console.log( createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 's/b', '(111) 111-1111');
// console.log( createPhoneNumber([5,5,5,8,6,7,5,3,0,9]), 's/b', '(555) 867-5309');


