const XO = require('./04-XO.js');

test('run codewar test cases', () => {
    expect( XO('xo')).toBe(true);
    expect( XO('xxOo')).toBe(true);
    expect( XO('xxxm')).toBe(false);
    expect( XO('Oo')).toBe(false);
    expect( XO('ooom')).toBe(false);
});

test('run additional test cases', () => {
    expect( XO("")).toBe(true);
    expect( XO('pocky y')).toBe(false)
    expect( XO('pocky x')).toBe(true)
});
