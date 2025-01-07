const sumAll = function(num1, num2) {
    // error checking
    if (!Number.isInteger(num1) || num1 < 0|| !Number.isInteger(num2) || num2 < 0) return "ERROR";
    
    // edge case
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
