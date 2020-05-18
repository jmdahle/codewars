// ATM
// https://www.codewars.com/kata/5635e7cb49adc7b54500001c
// 7 KYU

/** Description */
// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

// You are given money in nominal value of n with 1<=n<=1500.

// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.


/** Function */
// without comments
const ATM = (value)=> {
    value = parseInt(value);
    denominationsArray = [500, 200, 100, 50, 20, 10];
    numberOfBills = 0;
    for (let i = 0; i < denominationsArray.length; i++) {
        let num = Math.floor(value / denominationsArray[i]);
        numberOfBills += num;
        value -= (num * denominationsArray[i]);
    }
    return (value === 0) ? numberOfBills : -1;
}

/*
const ATM = (value)=> {
    // You are given money in nominal value of n with 1<=n<=1500.
    // convert from string to integer
    value = parseInt(value);
    // array for denominations, ordered largest to smallest
    // nominal value 10, 20, 50, 100, 200 and 500 dollars
    denominationsArray = [500, 200, 100, 50, 20, 10];
    numberOfBills = 0;

    // loop through denominations
    for (let i = 0; i < denominationsArray.length; i++) {
//console.log(value);
        // divide value by denomination; take only integer portion
        let num = Math.floor(value / denominationsArray[i]);
        // add to number of bills
        numberOfBills += num;
        // subtract from the value
        value -= (num * denominationsArray[i]);
    }
    return (value === 0) ? numberOfBills : -1;
}
*/

/** Export */
module.exports = ATM;

/** Tests */
// let testCases = [
//     {value: 770, answer: 4},
//     {value: 550, answer: 2},
//     {value: 10, answer: 1},
//     {value: 1250, answer: 4},
//     {value: 5000, answer: 10},
//     {value: 125, answer: -1},
//     {value: 666, answer: -1},
//     {value: 42, answer: -1}
// ];
// for (let t=0; t<testCases.length; t++) {
//     console.log(
//         ATM( testCases[t].value ), 
//         `ATM(${testCases[t].value} should be ${testCases[t].answer})`,
//         ATM( testCases[t].value == testCases[t].answer)
//         );
// }

