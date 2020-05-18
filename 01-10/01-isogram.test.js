// include function from js file
const isIsogram = require('./01-isogram.js');

// original tests from codewars
test('run test case #1', () => {
    // test #1 from codewars
    expect( isIsogram("Dermatoglyphics") ).toBe(true);
});

test('run test case #2', () => {
    // test from codewars
    expect( isIsogram("isogram") ).toBe(true);
});

test('run test case #3', () => {
    // test from codewars - same chars may not be adjacent
    expect( isIsogram("aba") ).toBe(false);
});

test('run test case #4', () => {
    // test from codewars - same chars may not be same case
    expect( isIsogram("moOse") ).toBe(false);
});

test('run test case #5', () => {
    // test from codewars - same chars may not be same case, nor adjacent
    expect( isIsogram("isIsogram") ).toBe(false);
});

test('run test case #6', () => {
    // test from codewars - an empty string is a valid isogram
    expect( isIsogram("") ).toBe(true);
});

test('run test case #7', () => {
    // test from codewars - an empty string is a valid isogram
    expect( isIsogram("chicken") ).toBe(false);
});
