// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006
// 6 Kyu

/** Description */
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

/** Function */
const solution = (number)=> {
    // given n a number, and either 3 or 5
    // number of multiples of 5 lower than n is Math.floor(n/5) is n5
    // number of multiples of 3 lower than n is Math.floor(n/3) is n3
    // number of multiples of 15 lower than n are counted in both and is Math.floor(n/(3*5)) is n15
    // the sum of the numbers 1..n3 is (n3 * (n3+1))/2, multipled by 3 is the of multiples of 3 up to n
    // ... and similar for 5 and 15
    number--; // reduce by one to exclude the end point
    return (
        ( Math.floor(number/3) * (Math.floor(number/3) + 1) ) /2 * 3 +
        ( Math.floor(number/5) * (Math.floor(number/5) + 1) ) /2 * 5 -
        ( Math.floor(number/(3*5)) * (Math.floor(number/(3*5)) + 1) ) /2 * (3*5)
    );
}

/** Export */
module.exports = solution;

/** Tests */
//console.log(solution(10), 's/b 23');
