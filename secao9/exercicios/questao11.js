// const show_first_and_last = (array) => {
//     let result = [];

//     for (let i = 0; i < array; i++) {
//         result.push(array)
//     };

//     return [result[0], result[-1]];
// };

// console.log(show_first_and_last([1, 2, 3, 2, 32]));

const show_first_and_last = (array) => {
    let index_first = 0;
    let index_last = array.length - 1;

    let element_first = array[index_first];
    let element_last = array[index_last];

    return [element_first, element_last];
};

console.log(show_first_and_last([1, 2, 231, 'vasco']));