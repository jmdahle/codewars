const rgb = require('./07-rgb.js');

test('test cases', ()=> {
    expect( rgb(0,0,0)).toBe('000000');
    expect( rgb(0,0,-2)).toBe('000000');
    expect( rgb(300,255,255)).toBe('FFFFFF');
    expect( rgb(173,255,47)).toBe('ADFF2F');
})

