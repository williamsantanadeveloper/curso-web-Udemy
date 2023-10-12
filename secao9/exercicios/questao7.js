const its_between = (min, max, number, inclusive = false) => {
    if (inclusive) {
        return number >= min && number <= max
    }
    return number > min && number < max
};

const its_between2 = (min, max, number, inclusive = false) => {
    return inclusive ? number >= min && number <= max : number > min && number < max
};


console.log(its_between(10, 100, 50));
console.log(its_between2(10, 100, 50));