const coveredPawns = require('./21-coveredPawns.js');

test('test cases', () => {
    expect(coveredPawns(['f7', 'b1', 'h1', 'c7', 'h7'])).toEqual(0)
    expect(coveredPawns(['g2','h3'])).toEqual(1);
    expect(coveredPawns(['g2','h4'])).toEqual(0);
})