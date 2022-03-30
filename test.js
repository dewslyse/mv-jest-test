const stringLength = require('./index.js');

test('length of string is 6', () => {
    expect(stringLength('string')).toBe(6);
});

test('length of string is too short', () => {
    expect(() => stringLength('')).toThrow();
});

test('length of string is too long', () => {
    expect(() => stringLength('stringstring')).toThrow();
});