// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velocidade_atual: 0,
    velocidade_maxima: 200,
    acelerar_mais(delta) {
        if (this.velocidade_atual + delta <= this.velocidade_maxima) {
            this.velocidade_atual += delta
        }
        else {
            this.velocidade_atual = this.velocidade_maxima
        }
    },
    status() {
        return `${this.velocidade_atual}Km/h de ${this.velocidade_maxima}Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velocidade_maxima: 324, // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super - serve para referênciar o protótipo
    }
}
Object.setPrototypeOf(ferrari, carro) // primeiro parâmetro é o objeto e o segundo parâmetro é o protótipo nas entrelinhas ferrari tem como carro o seu protótipo
// Object.setPrototypeOf() - uma função que estabelece uma relação entre dois objetos primeiro você tem o obj depois o protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar_mais(100)
console.log(volvo.status())

ferrari.acelerar_mais(300)
console.log(ferrari.status())