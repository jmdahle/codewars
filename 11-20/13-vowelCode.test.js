const vowelCode = require('./13-vowelCode.js');
const encode = vowelCode.encode;
const decode = vowelCode.decode;

test('tests for encode', () => {
    expect( encode('hello')).toEqual('h2ll4');
    expect( encode('How are you today?')).toEqual('H4w 1r2 y45 t4d1y?');
    expect( encode('This is an encoding test.')).toEqual('Th3s 3s 1n 2nc4d3ng t2st.');
});

test('test decode', () => {
    expect( decode('h2ll4')).toEqual('hello');
    expect( decode('H4w 1r2 y45 t4d1y?')).toEqual('How are you today?');
    expect( decode('Th3s 3s 1n 2nc4d3ng t2st.')).toEqual('This is an encoding test.');
});

