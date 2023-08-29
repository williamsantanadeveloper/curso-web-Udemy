const quase_array = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };
console.log(quase_array)

Object.defineProperty(quase_array, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quase_array[0])

const my_array = ['Rafael', 'Ana', 'Bia']

console.log(quase_array.toString(), my_array)