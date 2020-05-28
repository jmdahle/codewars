const pickPeak = require('./12-pickPeak.js');

test('test cases', () => {
    expect( pickPeak([0, 1, 2, 5, 1, 0])).toEqual({"pos": [3], "peaks": [5]});
    expect( pickPeak([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).toEqual({"pos": [3,7], "peaks": [6,3]});
    expect( pickPeak([1, 2, 2, 2, 1])).toEqual({"pos": [1], "peaks": [2]});
    expect( pickPeak([1, 2, 2, 2, 3])).toEqual({"pos": [], "peaks": []});
})