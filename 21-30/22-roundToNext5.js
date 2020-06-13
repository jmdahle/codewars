// Round to Next 5
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d
// 7 kyu


/* Description */
// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

/* Function */
const roundToNext5 = (n) => {
    return Math.ceil(n/5)*5;
}

/* Export */
module.exports = roundToNext5;

/* Test cases */
// console.log ( roundToNext5(0) );
// console.log ( roundToNext5(2) );
// console.log ( roundToNext5(3) );
// console.log ( roundToNext5(10) );
// console.log ( roundToNext5(12) );
