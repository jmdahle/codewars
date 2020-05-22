// toCamelCase
// https://www.codewars.com/kata/517abf86da9663f1d2000003
// 6 kyu

/* Description */
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/
/** SOLUTION COMMENT */
// reveals I need to work a bit on my regex and some string methods

/* Function */
const toCamelCase = (str) => {
    // use regex for splitting string on one ore more consecutive "-" or "_" characters
    array = str.split(/\-{1,}|\_{1,}/);
    // reduce array to a string, capitalizing indexes 1+
    strCamelCase = array.reduce( (a, arrayItem, index) => {
        return a + ((index === 0) ? arrayItem : arrayItem[0].toUpperCase() + arrayItem.substring(1,arrayItem.length))
    });
    return strCamelCase
}

/* Export */
module.exports = toCamelCase;

/* Test Cases */
//console.log(toCamelCase('the-stealth-warrior'), 's/b theStealthWarrior');
//console.log(toCamelCase('The_Stealth_Warrior'), 's/b TheStealthWarrior');
//console.log(toCamelCase('The__Stealth_Warrior'), 's/b TheStealthWarrior');