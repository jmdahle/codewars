// include function from js file
const AMT = require('./02-ATM.js');

// original tests from codewars
test('run test cases', () => {
    // tests from codewars
    expect( AMT(770) ).toBe(4);
    expect( AMT(550) ).toBe(2);
    expect( AMT(10) ).toBe(1);
    expect( AMT(1250) ).toBe(4);
    expect( AMT(5000) ).toBe(10);
    expect( AMT(125) ).toBe(-1);
    expect( AMT(666) ).toBe(-1);
    expect( AMT(42) ).toBe(-1);
});

