const object_for_array_person = (object) => {
    const person = {
        name: 'Maria',
        job: 'Desenvolvedora de Software'
    };

    let result = [];
    for (let item in person) {
        result.push([item, Object.keys(person)])
    }

    return result;
};

console.log(object_for_array_person())

const object_for_array_product = () => {

    const product = {
        code: 1111,
        price: 12000
    };

    return product;

};

console.log(object_for_array_product())
