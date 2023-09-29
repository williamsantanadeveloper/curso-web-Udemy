const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'Ipad Pro', price: 4199, fragile: true },
    { name: 'Glass', price: 12.49, fragile: true },
    { name: 'Plastic coup', price: 18.99, fragile: false }
];

console.log(products.filter(function (p) {
    return false
}));

const higher_price = products => products.price >= 500;
const fragile_true = products => products.fragile;

console.log(products.filter(higher_price).filter(fragile_true));