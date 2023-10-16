const show_more = (number) => {
    let result = [];

    for (let i = 0; i < number; i++) {
        result += '+';
    };

    return result;
};

console.log(show_more(2));
console.log(show_more(5));