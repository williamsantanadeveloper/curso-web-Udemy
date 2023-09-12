const car = [
    '{"name":"Rubber", "price": 3.45}',
    '{"name": "Notebook", "price": 13.90}',
    '{"name": "Pencil kit", "price": 41.22}',
    '{"name": "Pen", "price": 7.50}'
]

// Retornar um array apenas com os preços

const for_object = json => JSON.parse(json)
const just_price = product => product.price


const result = car.map(for_object).map(just_price)

console.log(result)