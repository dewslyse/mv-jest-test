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


module.exports = { stringLength, reverseString };