const solution = require('./05-sumMultOf3or5.js');

test('test cases', ()=> {
    expect(solution(10)).toBe(23);
    expect(solution(11)).toBe(33);
    expect(solution(12)).toBe(33);
    expect(solution(13)).toBe(45);
    expect(solution(16)).toBe(60);
});