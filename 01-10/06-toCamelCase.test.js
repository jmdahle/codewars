const toCamelCase = require('./06-toCamelCase.js');

test('test cases', () => {
    expect( toCamelCase('the-stealth-warrior') ).toBe('theStealthWarrior');
    expect( toCamelCase('The_Stealth_Warrior') ).toBe('TheStealthWarrior');
    expect( toCamelCase('The__stealth--warrior') ).toBe('TheStealthWarrior');
});