const narcissistic = require('./18-narcissistic.js');

test('test cases', () => {
    expect( narcissistic(7)).toBe(true);
    expect( narcissistic(371)).toBe(true);
    expect( narcissistic(153)).toBe(true);
    expect( narcissistic(1634)).toBe(true);
})