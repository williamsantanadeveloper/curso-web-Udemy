function criarProduto(nome, preco) {
    return {
        nome, preco, desconto: 0.1
    }
}
console.log(criarProduto('Iphone', 23013))
console.log(criarProduto('Ipad', 1199.49))
console.log(criarProduto('Iphone', 23013))