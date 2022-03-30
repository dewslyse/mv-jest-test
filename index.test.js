const Func = require('./index.js');

test('length of string is 6', () => {
    expect(Func.stringLength('string')).toBe(6);
});

test('length of string is too short', () => {
    expect(() => Func.stringLength('')).toThrow();
});

test('length of string is too long', () => {
    expect(() => Func.stringLength('stringstring')).toThrow();
});

test('string is reversed', () => {
    expect(Func.reverseString('string')).toBe('gnirts');
});