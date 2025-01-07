const leapYears = function(num) {
    return (num % 100 === 0) ? (num % 400 === 0) : (num % 4 === 0);
};

// Do not edit below this line
module.exports = leapYears;
