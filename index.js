const {odd, even} = require('./var');
const checkNumber = require('./func');

function checkStringOddEven(str) {
    if (str.length % 2) {
        return 'odd';
    } else {
        return 'even';
    }
    return even;
}
console.log(checkNumber(7));
console.log(checkStringOddEven('hello'));
