const palindromes = function (str) {
    if (str === "") return true;

    // Convert string to lowercase and filter out non alphanumeric characters
    str = str.toLowerCase().split("").filter(isAlphaNumeric).join("");

    return str === str.split("").reverse().join("");
};

function isAlphaNumeric(str) {
    let code = str.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

// Do not edit below this line
module.exports = palindromes;
