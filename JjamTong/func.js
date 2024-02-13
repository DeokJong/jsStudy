/*const value = require('./var')

console.log(value);*/


//구조 분해 방식
const {odd,even} = require('./var');

function checkOddOrEven(number){
    if(number%2){
        return odd;
    }
    else {
        return even;
    }
}

module.exports = checkOddOrEven ;
