// anagrams
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1
// 5 kyu
/* Description */
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

/* Function */
anagrams = (str, arr) => {
    let resultArray = [];
    // loop through array
    for (let w = 0; w < arr.length; w++) {
        let isAnagram = true;
        if (arr[w].length !== str.length) {isAnagram = false}
        // loop through each letter and remove from base string
        let baseString = str;
        for (let i = 0; i < arr[w].length; i++) {
            let indexOfBase = baseString.indexOf(arr[w][i]);
            if (indexOfBase !== -1) {
                // to use splice(), need to convert to array, remove letter, and join back to a string
                baseString = baseString.split('')
                baseString.splice(indexOfBase,1)
                baseString = baseString.join('');
            } else {
                // if a letter is not found, not an anagram of base string
                isAnagram = false;
            }
        }
        if (isAnagram === true) {resultArray.push(arr[w])}
    }
    return resultArray;
}

/* Export */
module.exports = anagrams;

/* test cases */
console.log( anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']),['carer', 'racer']);