// vowelCode
// https://www.codewars.com/kata/53697be005f803751e0015aa
// 6 kyu

/* Description */
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

/* Functions */
const encode = (string) => {
    let vowels = ['a','e','i','o','u']
    vowels.map( (value, index) => {
        let rx = new RegExp(value,"g")
        string = string.replace(rx ,index + 1)
    });
    return string;
}

const decode = (string) => {
    let vowels = ['a','e','i','o','u']
    vowels.map( (value, index) => {
        let rx = new RegExp(index + 1, "g")
        string = string.replace(rx ,value)
    });
    return string;
}

/* Export */
module.exports.decode = decode;
module.exports.encode = encode;

/* test cases */
// console.log( encode('Halloe'), 's/b', 'H1llo2' );
// console.log( decode(encode('Halloe')));
console.log( encode('How 1r2 yo5 today?'));