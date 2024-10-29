// Even or Odd Number

function isEven(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Input number must be an integer');
    }

    return number % 2 === 0;
}

module.exports = isEven;