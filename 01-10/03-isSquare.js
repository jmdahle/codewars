// You're a Square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// 7KYU

/** Description */
/*
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/

/** Function */
const isSquare = (n)=> {
    // if the square root is an integer, then n is a square.
    return Math.floor(Math.pow(n,0.5)) === Math.pow(n,0.5)
}

/** Export */
module.exports = isSquare;

/** Tests */
