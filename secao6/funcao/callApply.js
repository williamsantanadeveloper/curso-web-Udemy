function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro)) // Usando call para chamar uma função
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) 
// (1º contexto(função que deseja chamar), 2º primeiro parâmetro(nesse caso imposto), 3º segundo parâmetro(nesse caso a moeda))

console.log(getPreco.apply(global, [0.17, '$'])) 
// (1º contexto(função que deseja chamar), 2º precisa de um array e nele contera todas os parâmetros utilizados)