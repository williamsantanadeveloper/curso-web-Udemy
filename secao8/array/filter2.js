Array.prototype.filter2 = function (callback) {
    const new_array = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            new_array.push(this[i])
        }
    }
    return new_array
};

const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'Ipad Pro', price: 4199, fragile: true },
    { name: 'Glass', price: 12.49, fragile: true },
    { name: 'Plastic coup', price: 18.99, fragile: false }
];


const caro = products => products.price >= 500;
const fragil = products => products.fragile;

console.log(products.filter2(caro).filter2(fragil))
