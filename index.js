//Task 1
const stringLength = (string) => {
    if (string.length < 1) {
        throw new Error('too short');
    }
    if (string.length > 10) {
        throw new Error('too long');
    }
    return string.length;
}

//Task 2
const reverseString = (string) => {
    return string.split('').reverse().join('');
}

//Task 3
class Calculate {
    add = (a, b) => a + b;
    sub = (a, b) => a - b;
    div = (a, b) => a / b;
    mul = (a, b) => a * b;
}

//Task 4
const capitalize = (string) => {
    return string.toLowerCase().replace(/^\w/, (s) => s.toUpperCase());
}

module.exports = { stringLength, reverseString, Calculate, capitalize };