const anagrams = require('./17-anagrams.js');

test('test cases', () => {
    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual( ['aabb', 'bbaa']);
    expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual( ['carer', 'racer']);
    expect(anagrams('laser', ['lazing', 'lazy',  'lacer'])).toEqual( []);
});

