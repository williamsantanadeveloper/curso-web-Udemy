Array.prototype.map2 = function (callback) {
    const new_array = []
    for (let i = 0; i < this.length; i++) {
        new_array.push(callback(this[i], i, this))
    }
    return new_array
}

const car = [
    '{"name":"Rubber", "price": 3.45}',
    '{"name": "Notebook", "price": 13.90}',
    '{"name": "Pencil kit", "price": 41.22}',
    '{"name": "Pen", "price": 7.50}'
]

// Retornar um array apenas com os preços

const for_object = json => JSON.parse(json)
const just_price = product => product.price


const result = car.map(for_object).map2(just_price)

console.log(result)