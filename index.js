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

module.exports = stringLength;