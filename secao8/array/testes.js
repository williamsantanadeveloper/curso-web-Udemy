const nomes = (nome) => {
    return { nome }
}
console.log(nomes(1, 'William'))

function product(name, price) {
    this.name = name
    this.price = price
    this.desc = 0.15

    this.get_desc = () => {
        console.log(`${this.name} custa ${this.price}, mas com o desconto fica ${(this.price - (this.desc * this.price))}`)
    }
}

let value_product = new product('Notebook', 1000)
value_product.get_desc()

const numbers = [1, 23, 4, 4, 34, 4, 3, 4, 3, 3]

let result = numbers.map(function (e) {
    return e * 2
})

let square_root = e => Math.sqrt(e)
let sum10 = e => e + 10
result = numbers.map(square_root).map(sum10)
console.log(result)