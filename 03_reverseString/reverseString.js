const reverseString = function(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr = str.at(i) + newStr;
    }

    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
