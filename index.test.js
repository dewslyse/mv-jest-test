const Func = require('./index.js');
const calculate = Func.Calculate;

describe('String', () => {
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

    test('string is capitilized', () => {
        expect(Func.capitalize('string')).toEqual('String');
    })
});

describe('Calculator', () => {
    const calc = new calculate();
    describe('Add', () => {
        test('sum of 2 and 3 is 5', () => {
            expect(calc.add(2, 3)).toBe(5);
        });
        test('sum of -2 and 3 is 1', () => {
            expect(calc.add(-2, 3)).toBe(1);
        });
        test('sum of 10 and 5 is less than 16', () => {
            expect(calc.add(10, 5)).toBeLessThan(16);
        });
    });

    describe('Subtraction', () => {
        test('substracting 3 from 5 equals 2', () => {
            expect(calc.sub(5, 3)).toBe(2);
        });
        test('substracting -3 from -2 equals 1', () => {
            expect(calc.sub(-2, -3)).toBe(1);
        });
        test('substracting 5 from 10 is less than 10', () => {
            expect(calc.sub(10, 5)).toBeLessThan(10);
        });
    });

    describe('Division', () => {
        test('divide', () => {
            expect(calc.div(5, 2)).toBeLessThanOrEqual(2.5);
        });
        test('divide', () => {
            expect(calc.div(-3, -3)).toBe(1);
        });
        test('divide', () => {
            expect(calc.div(10, 5)).toBe(2);
        });
    });

    describe('Multiplication', () => {
        test('multiply', () => {
            expect(calc.mul(5, 3)).toBe(15);
        });
        test('multiply', () => {
            expect(calc.mul(-2, -3)).toBe(6);
        });
        test('multiply', () => {
            expect(calc.mul(3, 2)).toBeGreaterThan(5);
        });
    });
});

// describe('Capitalize', () => {
//     test('string capitilization', () => {
//         expect(Func.capitalize('string')).toEqual('String');
//     })
// });