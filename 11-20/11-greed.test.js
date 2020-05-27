const score = require('./11-greed.js');

test('CW test cases', () => {
    expect( score([2, 3, 4, 6, 2])).toBe(0);
    expect( score([4, 4, 4, 3, 3])).toBe(400);
    expect( score([2, 4, 4, 5, 4])).toBe(450);
});

test('JD test cases', () => {
    expect( score([1, 1, 6, 1, 2])).toBe(1000);
    expect( score([1, 1, 1, 5, 6])).toBe(1050);
    expect( score([5, 5, 5, 1, 1])).toBe(700);
    expect( score([5, 5, 5, 1, 5])).toBe(650);
    expect( score([5, 1, 1, 1, 1])).toBe(1150);
});
