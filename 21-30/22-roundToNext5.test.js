const roundToNext5 = require('./22-roundToNext5.js');

test('test cases', () => {
    expect( roundToNext5(0)).toEqual(0);
    expect( roundToNext5(2)).toEqual(5);
    expect( roundToNext5(3)).toEqual(5);
    expect( roundToNext5(5)).toEqual(5);
    expect( roundToNext5(10)).toEqual(10);
    expect( roundToNext5(12)).toEqual(15);
});