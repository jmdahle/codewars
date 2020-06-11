// reject
// https://www.codewars.com/kata/52988f3f7edba9839c00037d
// 7 kyu

/* Description */
// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

/* Function */
const reject = (array, predicate) => {
    // let returnArray = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (!predicate(array[i])) {
    //         returnArray.push(array[i])
    //     }
    // }
    // return returnArray;
    // refactored using .filter
    return array.filter( (item) => { return !predicate(item) });
    
}
/* Export */
module.exports = reject;

/* test case */
// console.log(reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [1, 3, 5]);