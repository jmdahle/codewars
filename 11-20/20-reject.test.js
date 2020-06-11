const reject = require('./20-reject.js');

test('test case', () => {
    expect( reject([1,2,3,4,5,6],function(num){ return num % 2 == 0; }) ).toEqual([1, 3, 5]);
});




