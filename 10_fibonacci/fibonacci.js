const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    let f1 = 0;
    let f2 = 1;

    for (let i = 0; i < num; i++) {
        let temp = f1;
        f1 = f2;
        f2 += temp;
    }

    return f1;
};

// Do not edit below this line
module.exports = fibonacci;
