const XO = require('./04-XO.js');

TextDecoderStream('run codewar test cases', () => {
    expect( XO('xo').toBe(true) );
    expect( XO('xxOo').toBe(true) );
    expect( XO('xxxm').toBe(false) );
    expect( XO('Oo').toBe(false) );
    expect( XO('ooom').toBe(false) );
});
