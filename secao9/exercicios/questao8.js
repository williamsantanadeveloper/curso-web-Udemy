function multiply(one_number, two_number) {
    let result = 0;

    for (let i = 0; i < two_number; i++) {
        result += one_number
    };

    return result;
};

console.log(multiply(5, 5));
console.log(multiply(0, 7));
