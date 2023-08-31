nomes = (nome) => {
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