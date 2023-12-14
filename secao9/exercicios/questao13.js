const filter_numbers = (array) => {

    let result = [];

    for (let item of array) {
        if (typeof item === 'number') {
            result.push(item)
        }
    }
    return result
};

console.log(filter_numbers([1, 'Java']))