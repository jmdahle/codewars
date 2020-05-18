// include function from js file
const isSquare = require('./03-isSquare.js');

// original tests from codewars
test('run test cases', () => {
    // tests from codewars
    expect( isSquare(-1) ).toBe(false);
    expect( isSquare(0) ).toBe(true);
    expect( isSquare(3) ).toBe(false);
    expect( isSquare(4) ).toBe(true);
    expect( isSquare(25) ).toBe(true);
    expect( isSquare(26) ).toBe(false);
});

