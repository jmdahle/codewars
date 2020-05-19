// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript
// 7 KYU

/** Description */
/**
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

 */

/** Function */
const XO = (str)=> {
    // use "match" string method to create an array of all matches using global regular expression
    // the length of the resulting array is the count of the regular expression matches
    // compare the results; if the same count, returns true
    // need to check for null returned by match where X or O is not found
    return (
        ((str.toUpperCase().match(/X/g) === null) ? 0 : str.toUpperCase().match(/X/g).length) === ((str.toUpperCase().match(/O/g) === null) ? 0 : str.toUpperCase().match(/O/g).length)
    );
}

/** Export */
module.exports = XO;

/** Tests */
// console.log( XO("ooxx"), 's/b true');
// console.log( XO("xooxx"), 's/b false');
console.log( XO("pocky y"), 's/b false');