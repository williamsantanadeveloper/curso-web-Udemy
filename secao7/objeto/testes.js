// const fabricantes = new Object
// fabricantes.nomes = ['Willams', 'Mercedes', 'Ferrari']
// fabricantes.nomes_dos_pilotos = ['Hamilton', 'Alonso']
// console.log(fabricantes)

// function funcionario(nome) {
//     this.nome = nome
//     console.log(`O nome do meu funcionário é ${this.nome}`)
// }
// const chamar = new funcionario('William')
// console.log(chamar)

// function pproduto(salario, imposto) {
//     return {
//         salario,
//         get_salario_com_imposto() {
//             return salario * (1 - imposto)
//         }
//     }
// }
// const f1 = pproduto(1000, 0.10)
// console.log(f1.get_salario_com_imposto())

const jogos_pc = { valve: ['csgo', 'dota'], riot: ['lol', 'tft'] }
const jogos_console = { __proto__: jogos_pc, EA: ['fifa', 'formula1'] }
console.log(jogos_console.valve)

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
        return (`${this.velocidade_atual} Km/h de ${this.velocidade_maxima} Km/h`)
    }
}

const ferrari = {
    modelo: 'f40',
    velocidade_maxima: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return (`${this.modelo}: ${super.status()}`)
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
ferrari.acelerar_mais()
volvo.acelerar_mais()
console.log(ferrari)
console.log(volvo.status())