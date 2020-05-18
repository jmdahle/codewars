// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript


/** Directions */
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case

/** DEVELOPER NOTE */
// clearly I should have used regular expressions!
// A better anwer:
/*
function isIsogram(str) { 
    return !/(\w).*\1/i.test(str)
}
*/


/** Function */
/** without comments */
const isIsogram = (str) => {
    str = str.toUpperCase();
    console.log(str, str.toUpperCase())
    let isIsogram = true;
    for (let i = 0; i < str.length - 1; i++) {
        char = str.charAt(i);
        charLocation = str.substr(i+1,str.length - (i + 1)).indexOf(char);
        if (charLocation >= 0) {
            isIsogram = false;
            break;
        }
    }
    return isIsogram;
}

/**
const isIsogram = (str) => {
    // make `str` agrument all upper case (ignore letter case: 'a' is same as 'A')
    str = str.toUpperCase();
    // Note `str` argument is like an array of letters
    // start my assuming the `str` argument is an isogram ("" is an isogram)
    let isIsogram = true;
    // loop through the characters in the `str` argument
    for (let i = 0; i < str.length - 1; i++) {
        // take the letter at the position 'i'
        char = str.charAt(i);
        charLocation = str.substr(i+1,str.length - (i + 1)).indexOf(char); // returns a negative number if `char` is not in the remaining characters of `str`
        // does the letter occur in the string after the position 'i'?
        if (charLocation >= 0) {
            // if the characted is among the remaining characters, then this is NOT an isogram;  there is a duplicate in there (at charLocation).
            isIsogram = false;
            // we can exit the for loop and not bother with the rest.
            break;
        }
    }
    return isIsogram;
}
*/


/** Local Tests */
console.log( isIsogram("Dermatoglyphics"), 'should be true');
console.log( isIsogram("Chicken"), 'should be false');
console.log( isIsogram("isogram"), 'should be false');
console.log( isIsogram("moOse"), 'should be false');
console.log( isIsogram("isIsogram"), 'should be false');
console.log( isIsogram(""), 'should be false');


/** Export */
module.exports = isIsogram;

