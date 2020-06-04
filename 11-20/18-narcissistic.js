// narcissistic numbers
// https://www.codewars.com/kata/5287e858c6b5a9678200083c
// 6 kyu

/* Description */
// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

/* Function */
const narcissistic = (value) => {
    let strValue = value.toString();
    let exponent = strValue.length;
    let total = 0
    console.log('take each digit to the power of', exponent);
    for (let i = 0 ; i < exponent; i++) {
        total += Math.pow(parseInt(strValue[i]),exponent)
    }
    return total === value;
}

/* Export */
module.exports = narcissistic;

/* test cases */
// console.log( narcissistic(7), true);
// console.log( narcissistic(371), true);
// console.log( narcissistic(153), true);
// console.log( narcissistic(1634), true);
