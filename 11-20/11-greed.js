// Greed is Good
// https://www.codewars.com/kata/5270d0d18625160ada0000e4
// 5 kyu

/* Description */
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

/* Function */
const score = (dice) => {
    // dice is known to be 5 members, with each member having the value 1-6
    let scoreForTriples = [1000, 200, 300, 400, 500, 600];  // score for 3 of a kind
    let scoreForSingles = [100, 0, 0, 0, 50, 0]; // score for 1 of a kind (note: not counted if part of a triple!)
    let countArray = [0,0,0,0,0,0]; // initialize total count array
    for (let i = 0; i < dice.length; i++) {
        countArray[dice[i]-1]++
    }
    // multiply the count by the score for triples and leftover singles
    let scoreArray = countArray.map( (value, index) => {
        return (Math.floor(value/3) * scoreForTriples[index] + ( value - (Math.floor(value/3) * 3) ) * scoreForSingles[index])
    });
    // reduce the array to the sum of scores
    return scoreArray.reduce( (cum, item) => { return cum + item });
}

/* Export */
module.exports = score;

/* Test cases */
console.log (  score([1, 1, 6, 1, 2]) , 's/b' , 1000);
console.log ( score([1, 1, 1, 5, 6]) , 's/b' , 1050);
console.log ( score([5, 5, 5, 1, 1]), 's/b' , 700) ;
console.log ( score([5, 5, 5, 1, 5]), 's/b' , 650) ;
console.log ( score([1, 1, 5, 1, 1]), 's/b' , 1150) ;

