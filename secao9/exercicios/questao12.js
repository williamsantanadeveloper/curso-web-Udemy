const remove_propriety = (object, propriety_name) => {
    const copy = Object.assign({}, object);
    delete copy[propriety_name];

    return copy
};

console.log(remove_propriety({ a: 1, b: 2 }, 'a'));
console.log(remove_propriety({
    id: 20, name: 'caneta', description: 'Não preenchido', adrress: {
        street: 'ABC',
        number: 123
    }
}, 'description'));